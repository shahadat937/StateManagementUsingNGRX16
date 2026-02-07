import { createReducer, on } from '@ngrx/store';
import { initialState } from './course.states';
import {
  createCourseSuccess,
  deleteCourseSuccess,
  readCoursesSuccess,
  showForm,
  updateCourseSuccess,
} from './courses.action';

export const coursesReducer = createReducer(
  initialState,
  on(showForm, (state, action) => {
    return {
      ...state,
      showForm: action.value,
    };
  }),
  on(createCourseSuccess, (state, action) => {
    const course = { ...action.course, id: (state.courses.length + 1).toString() };
    return {
      ...state,
      courses: [...state.courses, course],
    };
  }),
  on(updateCourseSuccess, (state, action) => {
  console.log(action);

  const updatedCourses = state.courses.map(c => {
    if (c.id === action.course.id) {
      return action.course;
    } else {
      return c;
    }
  });

  return {
    ...state,
    courses: updatedCourses
  };
}),
on(deleteCourseSuccess, (state, action) => {
  console.log(action);

  const updateArray = state.courses.filter(c => c.id !== action.id);

  return {
    ...state,
    courses: updateArray
  };
}),
on(readCoursesSuccess,(state,action)=>{
  console.log(action)
  return{
    ...state,
    courses:action.courses
  }
})
);
