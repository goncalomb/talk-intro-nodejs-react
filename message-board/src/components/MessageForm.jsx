import React from 'react';
import styled from 'styled-components';

import { Input, Button } from './styled';

const Form = styled.form`
    display: flex;
    input, button {
        font-size: 1.5em;
    }
    input {
        flex: 1;
        margin-right: 10px;
    }
`;

export default class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({
            text: ""
        });
    }

    render() {
        return (
            <Form action="" onSubmit={this.onSubmit}>
                <Input type="text" value={this.state.text} onChange={this.onChange} />
                <Button type="submit">Send</Button>
            </Form>
        );
    }
}
