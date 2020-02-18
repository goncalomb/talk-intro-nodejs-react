import React from 'react';

import { MainContainer, Button, BoxWithBorder } from './styled';
import MessageForm from './MessageForm';
import MessageList from './MessageList';
import ConfigurationForm from './ConfigurationForm';

// TODO: move this util functions to 'utils.js'

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
        serverAddress: window.location.hostname // hostname from the page
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
function loadMessages(serverAddress) {

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

        // the interval handle to fetch from the server
        this.interval = 0;

        // bind the handlers to this
        this.onNewMessage = this.onNewMessage.bind(this);
        this.onOpenConfig = this.onOpenConfig.bind(this);
        this.onConfigChange = this.onConfigChange.bind(this);
    }

    componentDidMount() {
        // this runs after React mounts this component on the DOM
        // we use this event to start fetching messages from the server
        this.interval = setInterval(() => {
            loadMessages().then(messagesSrv => {
                if (this.interval == 0) {
                    // if unmounted, stop
                    return;
                }

                // let's add the messages from the server to the state




            }).catch(err => {
                console.error('error loading messages', err);
            });
        }, 5000); // fetch messages every 5 seconds
    }

    componentWillUnmount() {
        // this runs just before React
        clearInterval(this.interval);
        this.interval = 0;
    }

    createNewMessageObject(message) {
        return {
            id: randomId(),
            timestamp: Date.now(),
            username: this.state.config.username,
            message
        }
    }

    onNewMessage(message) {
        this.setState(state => {
            return {
                messages: [
                    ...this.state.messages,
                    this.createNewMessageObject(message)
                ]
            };
        });
    }

    onOpenConfig() {
        this.setState({ isConfigOpen: true });
    }

    onConfigChange(config) {
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
                        </React.Fragment>
                    )}
                </BoxWithBorder>
                <MessageList messages={this.state.messages} />
            </MainContainer>
        );
    }
}
