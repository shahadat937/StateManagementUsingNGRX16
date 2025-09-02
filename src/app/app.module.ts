import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CounterComponent } from './counter/counter.component';
import { HeaderComponent } from './header/header.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterValueComponent } from './counter/counter-value/counter-value.component';
import { CounterInputComponent } from './counter/counter-input/counter-input.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/states/counter-reducer';
import { CustomInputComponent } from './counter/custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { coursesReducer } from './courses/state/courses.reducer';
import { appReducer } from './store/app.state';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CounterComponent,
    HeaderComponent,
    CounterButtonComponent,
    CounterValueComponent,
    CounterInputComponent,
    CustomInputComponent,
    CourseCardComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
