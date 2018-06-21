// @flow

import React, {Component} from 'react';
import Delta from './delta';

import './counter.css';

type PropsType = {
  counter: number
};

class Counter extends Component<PropsType> {
  onDecrement = () => this.props.dispatch({type: 'decrement'});
  onIncrement = () => this.props.dispatch({type: 'increment'});

  render() {
    const {counter} = this.props;
    return (
      <div className="counter">
        <div className="button-row">
          <button className="dec-btn" onClick={this.onDecrement}>
            -
          </button>
          {counter}
          <button className="inc-btn" onClick={this.onIncrement}>
            +
          </button>
        </div>
        <Delta />
      </div>
    );
  }
}

export default Counter;
