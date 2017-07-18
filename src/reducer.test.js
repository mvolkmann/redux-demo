// @flow

import reducer from './reducer';
import type {StateType} from './types';

describe('reducer', () => {
  test('should decrement', () => {
    const state: StateType = {counter: 5, delta: 2};
    const action = {type: 'decrement'};
    const newState = reducer(state, action);
    expect(newState.counter).toBe(3);
  });

  test('should increment', () => {
    const state: StateType = {counter: 5, delta: 2};
    const action = {type: 'increment'};
    const newState = reducer(state, action);
    expect(newState.counter).toBe(7);
  });

  test('should change delta', () => {
    const state: StateType = {counter: 0, delta: 2};
    const action = {type: 'deltaChange', payload: 3};
    const newState = reducer(state, action);
    expect(newState.delta).toBe(3);
  });

  test('should return initial state on INIT', () => {
    const state: StateType = {counter: 0, delta: 1};
    const action = {type: '@@redux/INIT'};
    const newState = reducer(state, action);
    expect(newState).toEqual(state);
  });

  test('should throw on unsupported action type', () => {
    const state: StateType = {counter: 0, delta: 1};
    const action = {type: 'notSupported'};
    expect(() => reducer(state, action)).toThrowError(
      'unsupported action type "notSupported"'
    );
  });
});
