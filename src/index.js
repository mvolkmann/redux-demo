// @flow

import React from 'react';
import {reduxSetup} from 'redux-easy';
import Counter from './counter';

const initialState = {
  counter: 0,
  delta: 1
};
reduxSetup({component: <Counter />, initialState});
