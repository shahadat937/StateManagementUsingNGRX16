import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/models/course.model';

export const showForm = createAction('showForm', props<{ value: boolean }>());
