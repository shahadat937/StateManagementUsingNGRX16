import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { AppState } from '../store/app.state';
import {getShowForm } from './state/course.selector';
import { showForm } from './state/courses.action';
import { CourseEntityService } from './services/course-entity-service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]> | null = null;
  showForm$: Observable<boolean> | null = null;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private couserEntityService:CourseEntityService
  ) {}

  ngOnInit(): void {
    this.showForm$ = this.store.select(getShowForm);
  this.courses$= this.couserEntityService.entities$;
  }
  showCreateForm() {
    this.router.navigateByUrl('courses?edit=false');
    this.store.dispatch(showForm({ value: true }));
  }
}
