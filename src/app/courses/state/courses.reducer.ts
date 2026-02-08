import { createReducer, on } from '@ngrx/store';
import { courseAdapter, initialState } from './course.states';
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
    return courseAdapter.addOne(action.course,state)
  }),
//   on(updateCourseSuccess, (state, action) => {
//   console.log(action);

//   const updatedCourses = state.courses.map(c => {
//     if (c.id === action.course.id) {
//       return action.course;
//     } else {
//       return c;
//     }
//   });

//   return {
//     ...state,
//     courses: updatedCourses
//   };
// }),
on(deleteCourseSuccess, (state, action) => {
    return courseAdapter.removeOne(action.id,state)
}),
on(readCoursesSuccess,(state,action)=>{
  return courseAdapter.setAll(action.courses,state)
})
);
