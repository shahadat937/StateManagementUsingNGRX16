import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { COURSES_STATE } from 'src/app/constants';
import { Course } from 'src/app/models/course.model';
import { showForm } from './courses.action';


export interface CourseStates{
  showForm: boolean;
  loaded:boolean;
}
export const initialState:CourseStates=  {
  showForm: false,
  loaded:false
}