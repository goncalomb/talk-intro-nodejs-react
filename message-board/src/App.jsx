import React from 'react';

import { AppWrapper, GlobalStyle, PageSizer } from './components/styled';
import Main from './components/Main';

export default class App extends React.Component {
    render() {
        return (
            <AppWrapper>
                <GlobalStyle />
                <header>
                    <PageSizer>
                        <h1>
                            Tvvitter <small>Now with a limit of 77 characters!</small>
                        </h1>
                    </PageSizer>
                </header>
                <main>
                    <Main />
                </main>
                <footer>
                    <PageSizer>
                        <p>
                            A React application demo.
                        </p>
                        <p>
                            <a href="https://github.com/goncalomb/talk-intro-nodejs-react">github.com/goncalomb/talk-intro-nodejs-react</a>
                        </p>
                        <p>
                            <a href="https://goncalomb.com/">goncalomb.com</a>
                        </p>
                    </PageSizer>
                </footer>
            </AppWrapper>
        );
    }
}
