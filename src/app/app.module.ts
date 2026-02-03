import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterInputComponent } from './counter/counter-input/counter-input.component';
import { CounterValueComponent } from './counter/counter-value/counter-value.component';
import { CounterComponent } from './counter/counter.component';
import { CustomInputComponent } from './counter/custom-input/custom-input.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { appReducer } from './store/app.state';
import { EffectsModule } from '@ngrx/effects';
import { LoaderComponent } from './app/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
    MatSnackBarModule,
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
