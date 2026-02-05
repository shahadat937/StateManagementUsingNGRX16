import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { AppState } from '../store/app.state';
import { getCourse, getShowForm } from './state/course.selector';
import { readCourses, readCoursesSuccess, setEditMode, showForm } from './state/courses.action';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> | null = null;
  showForm$: Observable<boolean> | null = null;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.courses$ = this.store.select(getCourse);
    this.showForm$ = this.store.select(getShowForm);
      this.store.dispatch(readCourses())
  }
  showCreateForm() {
    this.store.dispatch(setEditMode({ editMode: false }));
    this.router.navigateByUrl('courses?edit=false');
    this.store.dispatch(showForm({ value: true }));
  
  }
}
