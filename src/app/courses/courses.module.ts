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

const routes: Routes = [
  { path: '', component: CoursesComponent }  // Shows CoursesComponent at /courses
];

@NgModule({
    declarations:[
    CoursesComponent,
    AddCourseComponent,
    CourseCardComponent 

    ],
    imports:[
       CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COURSES_STATE,coursesReducer)
    ],
    exports:[]
})
export class CoursesModule{

}