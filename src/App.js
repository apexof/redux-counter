import React, { Component } from 'react';
import {createStore} from 'redux';
import actionTypes from './constants/actionTypes';
import * as actions from './actions/counterActions';

const {INCREMENT, DECREMENT, RESET} = actionTypes;
const {increment, decrement, reset} = actions;
const initialState = {
  count: 0
};

function reducer (state, action) {
  switch(action.type) {
    case INCREMENT: return {count: state.count + action.amount}
    case DECREMENT: return {count: state.count - action.amount}
    case RESET: return initialState
    default: return state
  }
}

let store = createStore(reducer, initialState);

class App extends Component {

  componentDidMount(){
    store.subscribe(() => this.forceUpdate());
  }

  increment = () => {
    const amount = +this.refs.amount.value;
    store.dispatch(increment(amount));
  }

  decrement = () => {
    const amount = +this.refs.amount.value;
    store.dispatch(decrement(amount));
  }

  reset = () => {    
    store.dispatch(reset());
  }

  render() {
    const count = store.getState().count;

    return (
      <div>
        <button onClick={this.decrement}>-</button>
        <span>{count}</span>
        <button onClick={this.increment}>+</button>
        <button onClick={this.reset}>reset</button>
        <span>Step: </span><input type="text" defaultValue="3" ref="amount"/>
      </div>
    );
  }
}

export default App;
