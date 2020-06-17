
// npm install @babel/core @babel/preset-react @babel/cli
// npx babel --presets @babel/preset-react --no-comments -o 08-components.js 08-components.jsx








// class component

class MyClassComponent extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.name} ({this.props.age})</p>
            </div>
        );
    }
}
ReactDOM.render(<MyClassComponent name="John" age={45} />, document.getElementById("root0"));








// class component with state

class MyClassComponentWithState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "NOP",
        };
    }

    render() {
        return (
            <div>
                <p>Click for the date: <button onClick={() => this.setState({ date: (new Date()).toISOString() })}>PUSH</button></p>
                <p>{this.props.message}{this.state.date}</p>
            </div>
        );
    }
}
ReactDOM.render(<MyClassComponentWithState message="The date is: " />, document.getElementById("root1"));








// class component with state and conditional

class MyClassComponentWithToggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showing: false,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState(state => {
            return {
                showing: !state.showing
            }
        });
    }

    render() {
        return (
            <div>
                <p>{this.props.message}<button onClick={this.onClick}>PUSH</button></p>
                {this.state.showing ? <MyClassComponentWithState message="The date is: " /> : null}
            </div>
        );
    }
}
ReactDOM.render(<MyClassComponentWithToggle message="Click to toggle: " />, document.getElementById("root2"));
