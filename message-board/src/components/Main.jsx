import React from 'react';

import { MainContainer, Button, BoxWithBorder } from './styled';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import ConfigurationForm from './ConfigurationForm';

// TODO: move these util functions to 'utils.js'

const CONFIG_KEY = "tvvitter-config";

/**
 * Creates a "random" hex id.
 */
function randomId() {
    return Math.random().toString(16).slice(2);
}

/**
 * Load configuration from the browser storage.
 */
function loadConfiguration() {
    const str = window.localStorage.getItem(CONFIG_KEY);
    if (str) {
        return JSON.parse(str);
    }
    // if we don't have a configuration, create one
    const data = {
        username: "U:" + randomId(), // random username
        serverAddress: `${window.location.protocol}//${window.location.hostname}:${window.location.port}` // hostname from the page
    };
    saveConfiguration(data);
    return data;
}

/**
 * Saves configuration to the browser storage.
 */
function saveConfiguration(data) {
    window.localStorage.setItem(CONFIG_KEY, JSON.stringify(data));
}

/**
 * Load messages from the server.
 */
function loadMessages(serverAddress, since) {
    return fetch(`${serverAddress.trim()}/api/message?since=${since}`, {
        method: 'GET',
    }).then(res => res.json()); /* promise chain to return JSON */
}

/**
 * Send messages to the server.
 */
function sendMessage(serverAddress, message) {
    return fetch(`${serverAddress.trim()}/api/message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
}

// end of util functions

export default class Main extends React.Component {
    constructor(props) {
        super(props);

        // our global app state
        this.state = {
            isConfigOpen: false,
            config: loadConfiguration(), // { username: "", serverAddress: "" }
            messages: []
        }

        // request pending
        this.requestPending = false;
        // timestamp of the last get
        this.lastGetSince = 0;
        // the interval handle to fetch from the server
        this.interval = 0;

        // bind the handlers to this
        this.onNewMessage = this.onNewMessage.bind(this);
        this.onOpenConfig = this.onOpenConfig.bind(this);
        this.onClearAll = this.onClearAll.bind(this);
        this.onConfigChange = this.onConfigChange.bind(this);
    }

    componentDidMount() {
        // this runs after React mounts this component on the DOM
        // we use this event to start fetching messages from the server
        this.interval = setInterval(() => {
            if (!this.state.config.serverAddress && !this.requestPending) {
                return;
            }

            this.requestPending = true;

            loadMessages(this.state.config.serverAddress, this.lastGetSince).then(messagesSrv => {
                this.requestPending = false;

                if (this.interval == 0) {
                    // unmounted, stop
                    return;
                }

                if (!messagesSrv.length) {
                    // no new messages, stop
                    return;
                }

                // let's add the messages from the server to the state

                this.setState(state => {
                    // XXX: this is by far not the ideal method of fetching and merging the message arrays

                    // add all ids that we already have to a set
                    const ids = new Set(state.messages.map(m => m.id));
                    // filter the new messages
                    const messagesSrvFiltered = messagesSrv.filter(m => !ids.has(m.id));
                    // merge and sort the final array
                    if (messagesSrvFiltered.length) {
                        const messages = [...state.messages, ...messagesSrvFiltered].sort((a, b) => a.timestamp - b.timestamp);
                        return { messages };
                    }
                    return null;
                });
            }).catch(e => {
                this.requestPending = false;
                console.error('error getting messages', e);
            });

            this.lastGetSince = Date.now();

        }, 2000); // fetch messages every 5 seconds
    }

    componentWillUnmount() {
        // this runs just before React
        clearInterval(this.interval);
        this.interval = 0;
    }

    createNewMessageObject(message) {
        // construct the new message object
        return {
            id: randomId(),
            timestamp: Date.now(),
            username: this.state.config.username,
            message
        }
    }

    onNewMessage(message) {
        const messageObject = this.createNewMessageObject(message);
        // send the new message to the server
        if (this.state.config.serverAddress) {
            sendMessage(this.state.config.serverAddress, messageObject).catch(e => {
                console.error('error posting message', e);
            });
        } else {
            console.warn('server address not set, not sending message');
        }
        // and add to the state
        this.setState(state => {
            return {
                messages: [
                    // this is a special syntax to copy arrays, to that new array we are add the new message object
                    ...state.messages,
                    messageObject
                ]
            };
        });
    }

    onOpenConfig() {
        // open the config form
        this.setState({ isConfigOpen: true });
    }

    onClearAll() {
        // clear all messages
        this.setState({ messages: [] });
    }

    onConfigChange(config) {
        // save the config and close the form
        this.setState({ isConfigOpen: false, config });
        saveConfiguration(config);
    }

    render() {
        return (
            <MainContainer>
                <MessageForm onSubmit={this.onNewMessage} />
                <BoxWithBorder>
                    {this.state.isConfigOpen ? (
                        <ConfigurationForm
                            config={this.state.config}
                            onSubmit={this.onConfigChange}
                        />
                    ) : (
                        <React.Fragment>
                            <span><strong>Username:</strong> {this.state.config.username} </span>
                            <Button onClick={this.onOpenConfig}>Open Configuration</Button>
                            <Button onClick={this.onClearAll}>Clear All</Button>
                        </React.Fragment>
                    )}
                </BoxWithBorder>
                <MessageList messages={this.state.messages} />
            </MainContainer>
        );
    }
}
