import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseStates } from './course.states';
import { COURSES_STATE } from 'src/app/constants';
import { getRouterParams } from 'src/app/store/router/router.selector';
import { Params } from '@angular/router';

export const getCoursesState = createFeatureSelector<CourseStates>(COURSES_STATE);
export const getCourse = createSelector(
  getCoursesState,
  (state: CourseStates) => state.courses
);
export const getShowForm = createSelector(getCoursesState, (state) => {
  return state.showForm;
});
export const getEditMode = createSelector(getCoursesState, (state) => {
  return state.isEditMode;
});
export const getSelectedCourse = createSelector(getCoursesState, (state) => {
  return state.selectedCourse;
});

export const getCourseById=createSelector(
  getCoursesState,
  getRouterParams,
  (state,params:Params)=>{
   return state.courses.find(course=>course.id===params['id'])
  }
)