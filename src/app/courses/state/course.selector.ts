import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseStates } from './course.states';

export const getCoursesState=createFeatureSelector<CourseStates>('courses');
export const getCourse=createSelector(
  getCoursesState,
  (state: CourseStates) => state.courses
);
export const getShowForm = createSelector(getCoursesState, (state) => {
    return state.showForm;
})
