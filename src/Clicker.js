import React, { Component } from "react";

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1 };
        this.handleClick = this.handleClick.bind(this);
    }

    setRandomNum() {
        this.setState({
            num: Math.floor(Math.random() * 10),
        });
    }

    handleClick(evt) {
        this.setRandomNum();
    }

    render() {
        return (
            <div>
                <h2> This number: {this.state.num}</h2>
                {this.state.num === 7 && <h2>You win!</h2>}
                {this.state.num !== 7 && (
                    <button onClick={this.handleClick}>Click me!</button>
                )}
            </div>
        );
    }
}
export default Clicker;
