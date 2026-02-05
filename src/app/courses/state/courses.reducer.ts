import { createReducer, on } from '@ngrx/store';
import { initialState } from './course.states';
import {
  createCourse,
  createCourseSuccess,
  deleteCourse,
  deleteCourseSuccess,
  readCoursesSuccess,
  setEditMode,
  setSelectedCourse,
  showForm,
  updateCourse,
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
