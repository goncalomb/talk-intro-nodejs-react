import React from 'react';

import { Input, Button } from './styled';

export default class ConfigurationForm extends React.Component {
    constructor(props) {
        super(props);

        // our initial state, populate from the props
        this.state = {
            username: props.config.username,
            serverAddress: props.config.serverAddress
        };

        // bind the handlers to this
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onServerAddressChange = this.onServerAddressChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onUsernameChange(e) {
        // set the state when the username changes
        this.setState({
            username: e.target.value
        });
    }

    onServerAddressChange(e) {
        // set the state when the address changes
        this.setState({
            serverAddress: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            // this syntax copies all properties of the object to a new one, essentially cloning the object (spread operator)
            ...this.state
        });
    }

    render() {
        return (
            <form action="" onSubmit={this.onSubmit}>
                <p>
                    Username: <Input type="text" value={this.state.username} onChange={this.onUsernameChange} maxLength={32} placeholder="Username"/>
                </p>
                <p>
                    Server Address: <Input type="text" value={this.state.serverAddress} onChange={this.onServerAddressChange} maxLength={32} placeholder="Server Address"/>
                </p>
                <Button type="submit">Save</Button>
                <Button type="button" onClick={null /* TODO: implement cancel button */}>Cancel</Button>
            </form>
        );
    }
}
