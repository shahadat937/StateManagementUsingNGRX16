import { createReducer, on } from '@ngrx/store';
import {initialState } from './course.states';
import {
  showForm
} from './courses.action';

export const coursesReducer = createReducer(
  initialState,
  on(showForm, (state, action) => {
    return {
      ...state,
      showForm: action.value,
    };
  }),
  
)
