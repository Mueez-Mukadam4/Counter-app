import React, { Component } from 'react';
import './Counter.css';

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: Math.max(0, this.state.count - 1) });
  };

  render() {
    return (
      <div className="counter-card">
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <div className="button-group">
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
