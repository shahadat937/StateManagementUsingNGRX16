import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { exhaustMap, Observable, of } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { AppState } from 'src/app/store/app.state';
import {getCourseByIdParams } from '../state/course.selector';

//import { getCourseByIdParams } from '../state/courses.selector';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute:ActivatedRoute

  ){}

  id: string | null= null;
  selectedCourse$: Observable<Course> | null = null;

  ngOnInit(): void {
   // this.id=this.activatedRoute.snapshot.paramMap.get('id');
   this.selectedCourse$=this.store.select(getCourseByIdParams)
   
  }

  OnBackToCourses(){
    this.router.navigate(['courses']);
  }
}