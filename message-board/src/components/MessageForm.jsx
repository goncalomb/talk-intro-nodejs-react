import React from 'react';

import { InlineForm, Input, Button } from './styled';

/**
 * The message input form on the top of the page.
 */
export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);

        // initial state is just an empty form
        this.state = {
            text: ""
        };

        // bind the handlers to this
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        // set the state when the message changes
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        // on submitting the form, prevent the default html action
        e.preventDefault();
        // call the handler with the message text
        this.props.onSubmit(this.state.text);
        // clear the form
        this.setState({
            text: ""
        });
    }

    render() {
        return (
            <InlineForm action="" onSubmit={this.onSubmit}>
                <Input type="text" value={this.state.text} onChange={this.onChange} maxLength={77} placeholder="Type Your Message"/>
                <Button type="submit">Send</Button>
            </InlineForm>
        );
    }
}
