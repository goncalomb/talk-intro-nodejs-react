
// npm install @babel/core @babel/preset-react @babel/cli
// npx babel --presets @babel/preset-react -o 07-components.js 07-components.jsx








// functional component

function MyComponent(props) {
    return (
        <div>
            <p>{props.name} ({props.age})</p>
        </div>
    );
};
ReactDOM.render(<MyComponent name="John" age={45} />, document.getElementById("root0"));








// class component

class MyClassComponent extends React.Component {
    render() {
        return (
            <div>
                <p>{props.name} ({props.age})</p>
            </div>
        );
    }
}
ReactDOM.render(<MyComponent name="John" age={45} />, document.getElementById("root1"));









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
ReactDOM.render(<MyClassComponentWithState message="The date is: " />, document.getElementById("root2"));








// class component with state and conditional

class SomeElement extends React.Component {
    componentDidMount() {
        console.log("mount");
    }

    componentWillUnmount() {
        console.log("unmount");
    }

    render() {
        return (
            <MyClassComponentWithState message="The date is: " />
        );
    }
}

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
                {this.state.showing ? <SomeElement /> : null}
            </div>
        );
    }
}
ReactDOM.render(<MyClassComponentWithToggle message="Click to toggle: " />, document.getElementById("root3"));
