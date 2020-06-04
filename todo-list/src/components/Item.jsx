import React from 'react';

export default class Item extends React.Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.id)
    }

    render() {
        return (
            <li>
                <span>
                    <span>{this.props.message}</span>
                    <a href="#" onClick={this.onDelete}>DEL</a>
                </span>
            </li>
        );
    }
}
