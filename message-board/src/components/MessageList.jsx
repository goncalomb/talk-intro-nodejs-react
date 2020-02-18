import React from 'react';

import { BoxWithBorder, Button } from './styled';

/**
 * The message component, we render one for each message.
 */
function Message(props) {
    const data = props.data;
    // here we are creating a handler that calls a onHide prop with the message id
    const onClick = () => props.onHide(data.id)
    return (
        <BoxWithBorder>
            <p>{data.username} ({data.timestamp}) <Button onClick={onClick}>Hide</Button></p>
            <p>{data.message}</p>
        </BoxWithBorder>
    );
}

/**
 * The message list component with all the messages.
 */
export default class MessageList extends React.Component {
    render() {
        // we take the list of messages and create a Message component for each
        return (
            <BoxWithBorder style={{ overflowY: 'scroll' }}>
                {this.props.messages.map(data => (
                    <Message key={data.id} data={data} onHide={() => { /* TODO: implement the hide button, remove this and pass a handler from props */ }} />
                )).reverse()}
            </BoxWithBorder>
        );
    }
}
