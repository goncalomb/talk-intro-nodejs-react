import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { PageSizer } from './components/styled';
import Main from './components/Main';

// I stole the colors from Material-UI...
// https://material-ui.com/customization/color/#color-palette

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: sans-serif;
        color: #212121; /* grey 900 */
        background-color: #eceff1; /* blueGrey 50 */
    }

    a {
        color: #616161; /* grey 900 */
    }
`;

const Wrapper = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    margin: 0 auto;

    & > header {
        color: #fafafa; /* grey 50 */
        background-color: #546e7a; /* blueGrey 600 */
        letter-spacing: 0.1em;
    }

    & > header small {
        font-weight: normal;
        font-style: italic;
    }

    & > main {
        flex: 1;
    }

    & > footer {
        padding: 2em 0;
        background-color: white;
    }

    & > footer p {
        margin: 0.5em 0;
    }
`;

export default class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <GlobalStyle />
                <header>
                    <PageSizer>
                        <h1>
                            Message Board <small>The Best One</small>
                        </h1>
                    </PageSizer>
                </header>
                <Main />
                <footer>
                    <PageSizer>
                        <p>
                            A React application demo.
                        </p>
                        <p>
                            <a href="https://goncalomb.com/">goncalomb.com</a>
                        </p>
                    </PageSizer>
                </footer>
            </Wrapper>
        );
    }
}
