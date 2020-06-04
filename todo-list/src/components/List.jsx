import React from 'react';
import * as uuid from 'uuid';

import Item from './Item.jsx';

export default class ConfigurationForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageBeingWritten: "",
            items: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState(state => {
            if (state.messageBeingWritten) {
                return {
                    messageBeingWritten: "",
                    items: [...state.items, { id: uuid.v4(), message: state.messageBeingWritten }]
                };
            }
        });
    }

    onChange(e) {
        this.setState({
            messageBeingWritten: e.target.value
        });
    }

    onDelete(id) {
        this.setState(state => {
            const i = state.items.findIndex(item => item.id == id);
            if (i !== -1) {
                const items = [...state.items];
                items.splice(i, 1);
                return { items }
            }
        });
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.messageBeingWritten}
                        onChange={this.onChange}
                        placeholder="what needs to be done?"
                    />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {this.state.items.map(item => <Item key={item.id} id={item.id} message={item.message} onDelete={this.onDelete} />)}
                </ul>
            </div>
        );
    }
}
