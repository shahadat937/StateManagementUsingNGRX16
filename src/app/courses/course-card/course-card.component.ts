import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/models/course.model';
import { AppState } from 'src/app/store/app.state';
import {
  deleteCourse,
  setEditMode,
  setSelectedCourse,
  showForm,
} from '../state/courses.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent {
  constructor(private store: Store<AppState>,
    private router:Router
  ) {}

  @Input() course: Course | null = null;

  onCourseEdit() {
    this.store.dispatch(showForm({ value: true }));
    this.store.dispatch(setEditMode({ editMode: true }));
    this.store.dispatch(setSelectedCourse({ course: this.course }));
  }
  onDeleteClicked(){
    const doDelete=confirm('Do you really want to delete this course');
  console.log(doDelete)
  if(doDelete)
    this.store.dispatch(deleteCourse({id:this.course.id}))
  }
  showDetailsClicked()
  {
    console.log("Test")
this.router.navigate(['courses','course',this.course.id])
  }
}
