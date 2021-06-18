import React, { Component } from "react";

class timer extends Component {
  state = { counter: 0 };

  incrementCounter() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  componentDidMount() {
    const thisBoundedIncrementer = this.incrementCounter.bind(this);
    setInterval(thisBoundedIncrementer, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{this.state.counter}</h2>
      </div>
    );
  }
}

export default timer;