import { NgModule } from "@angular/core";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CoursesComponent } from "./courses.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { COURSES_STATE } from "../constants";
import { coursesReducer } from "./state/courses.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CoursesEffect } from "./state/courses.effects";
import { authGuard } from "../auth/services/auth.guard";
import { CourseDetailComponent } from './course-detail/course-detail.component';

const routes: Routes = [
  { path: '', component: CoursesComponent,canActivate: [authGuard], } , // Shows CoursesComponent at /courses
  { path: 'course/:id', component: CourseDetailComponent,canActivate: [authGuard], }  
];

@NgModule({
    declarations:[
    CoursesComponent,
    AddCourseComponent,
    CourseCardComponent,
    CourseDetailComponent 

    ],
    imports:[
       CommonModule,
    ReactiveFormsModule,
      EffectsModule.forFeature([CoursesEffect]),
    RouterModule.forChild(routes),
    StoreModule.forFeature(COURSES_STATE,coursesReducer)
    ],
    exports:[]
})
export class CoursesModule{

}