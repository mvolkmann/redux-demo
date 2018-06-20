// @flow

import React, {Component} from 'react';
import {dispatchSet, watch} from 'redux-easy';

import './delta.css';

type PropsType = {
  delta: number
};

class Delta extends Component<PropsType> {
  //onDeltaChange = (e: SyntheticInputEvent) =>
  onDeltaChange = e => dispatchSet('delta', Number(e.target.value));

  render() {
    return (
      <div className="delta">
        <label>Delta</label>
        <input
          type="number"
          onChange={this.onDeltaChange}
          value={this.props.delta}
        />
      </div>
    );
  }
}

export default watch(Delta, {delta: ''});
