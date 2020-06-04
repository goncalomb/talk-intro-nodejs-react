import React from 'react';

import List from './components/List.jsx';

export default class App extends React.Component {
    render() {
        return (
            <main>
                <h1>
                    TODO List
                </h1>
                <List />
            </main>
        );
    }
}
