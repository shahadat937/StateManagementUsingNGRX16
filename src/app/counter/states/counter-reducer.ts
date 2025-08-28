import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter-state';
import {
  increment,
  decrement,
  reset,
  customIncrement,
  toggleCustomInput,
} from './counter-actions';

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 })),
  on(customIncrement, (state, {value}) => {
  console.log('action:', value);
  return {
    ...state,
    counter: state.counter + value,
  };
}),
on(toggleCustomInput, (state) => ({
  ...state,
  toggle: !state.toggle
}))
);

