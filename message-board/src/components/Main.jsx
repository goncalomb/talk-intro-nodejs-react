import React from 'react';
import styled from 'styled-components';

import { PageSizer } from './styled';
import MessageForm from './MessageForm';
import MessageList from './MessageList';

const Container = styled(PageSizer)`
    display: flex;
    flex-direction: column;
    padding: 5px 0;

    & > :first-child {
        margin-bottom: 5px;
    }

    & > :last-child {
        flex: 1;
    }
`;

export default class Main extends React.Component {
    render() {
        return (
            <main>
                <Container>
                    <MessageForm />
                    <MessageList />
                </Container>
            </main>
        );
    }
}
