// @flow

import React, {Component} from 'react';
import {dispatchTransform, watch} from 'redux-easy';
import Delta from './delta';

import './counter.css';

type PropsType = {
  counter: number
};

class Counter extends Component<PropsType> {
  onDecrement = () => dispatchTransform('counter', c => c - this.props.delta);
  onIncrement = () => dispatchTransform('counter', c => c + this.props.delta);

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

export default watch(Counter, {counter: '', delta: ''});
