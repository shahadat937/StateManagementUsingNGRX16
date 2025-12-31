import { createReducer, on } from '@ngrx/store';
import { initialState } from './course.states';
import {
  createCourse,
  setEditMode,
  setSelectedCourse,
  showForm,
} from './courses.action';

export const coursesReducer = createReducer(
  initialState,
  on(showForm, (state, action) => {
    return {
      ...state,
      showForm: action.value,
    };
  }),
  on(createCourse, (state, action) => {
    const course = { ...action.course, id: state.courses.length + 1 };
    return {
      ...state,
      courses: [...state.courses, course],
    };
  }),
  on(setEditMode, (state, action) => {
    return {
      ...state,
      isEditMode: action.editMode,
    };
  }),
  on(setSelectedCourse, (state, action) => {
    return {
      ...state,
      selectedCourse: action.course,
    };
  })
);
