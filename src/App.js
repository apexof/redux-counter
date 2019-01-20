import React, { Component } from "react";
import { increment, decrement, reset } from "./actions/counterActions";
import store from "./store/store";

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  increment = () => {
    const amount = +this.refs.amount.value;
    store.dispatch(increment(amount));
  };

  decrement = () => {
    const amount = +this.refs.amount.value;
    store.dispatch(decrement(amount));
  };

  reset = () => {
    store.dispatch(reset());
  };

  render() {
    const count = store.getState().count;

    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{count}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>reset</button>
        <span>Step: </span>
        <input type="text" defaultValue="3" ref="amount" />
      </div>
    );
  }
}

export default App;
