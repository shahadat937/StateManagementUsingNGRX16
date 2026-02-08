import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { COURSES_STATE } from 'src/app/constants';
import { Course } from 'src/app/models/course.model';
import { showForm } from './courses.action';


export const courseAdapter=createEntityAdapter<Course>();

export interface CourseStates extends EntityState<Course>{
  showForm: boolean;
}
export const initialState:CourseStates=courseAdapter.getInitialState({
  showForm:false
})