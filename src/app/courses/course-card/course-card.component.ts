import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { setEditMode, showForm } from '../state/courses.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {


constructor(
   private store: Store<AppState>,
  ){}

  @Input() course: Course | null = null;

 onCourseEdit(){
    this.store.dispatch(showForm({ value: true }))
   this.store.dispatch(setEditMode({ editMode: true }))

  }




}


