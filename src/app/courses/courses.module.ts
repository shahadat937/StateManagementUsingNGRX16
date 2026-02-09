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
import { authGuard } from "../auth/services/auth.guard";
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { coursesResolver } from "../resolvers/courses.resolver";
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from "@ngrx/data";
import { CourseDataService } from "./services/course-data.service";
import { Course } from "../models/course.model";

export function selectCourseId(course: Course){
    return course.id
}

function sortbyTitle(a: Course, b: Course){
    return b.title.localeCompare(a.title);
}
const entityMetadata: EntityMetadataMap = {
  Course:{
    selectId: selectCourseId,
    sortComparer: sortbyTitle,
    entityDispatcherOptions:{
      optimisticUpdate:true,
      optimisticDelete:true
    }
  },
  Lesson:{}
};

const routes: Routes = [
  { path: '', component: CoursesComponent,canActivate: [authGuard],resolve:{
    resolver:coursesResolver
  } } , // Shows CoursesComponent at /courses
  { path: 'course/:id', component: CourseDetailComponent,canActivate: [authGuard],resolve:{
    resolver:coursesResolver
  } }  
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
      EffectsModule.forFeature([]),
    RouterModule.forChild(routes),
    StoreModule.forFeature(COURSES_STATE,coursesReducer)
    ],
    exports:[],
    providers:[CourseDataService]
})
export class CoursesModule{
  constructor(
    eds:EntityDefinitionService,
    entityDataService:EntityDataService,
    courseDataService:CourseDataService
  )
  {
eds.registerMetadataMap(entityMetadata);
entityDataService.registerService('Course',courseDataService)
  }
}