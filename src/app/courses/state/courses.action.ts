import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/course.model';

export const showForm = createAction('showForm', props<{ value: boolean }>());
export const createCourse = createAction(
  'createCourse',
  props<{ course: Course }>()
);
export const createCourseSuccess = createAction(
    '[courses] create course success',
    props<{ course: Course}>()
)

export const readCourses = createAction(
    '[courses] read courses'
)
export const readCoursesSuccess = createAction(
    '[courses] read courses success',
    props<{ courses: Course[]}>()
)
export const setEditMode = createAction(
  'setEditMode',
  props<{ editMode: boolean }>()
);

export const setSelectedCourse = createAction(
  'setSelectedCourse',
  props<{ course: Course | null }>()
);

export const updateCourse=createAction('updateCourse',props<{course:Course}>());
export const deleteCourse=createAction('deleteCourse',props<{id:string}>());

