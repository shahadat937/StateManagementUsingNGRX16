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
import { ComfirmLatitudeLongitudeComponent } from './comfirm-latitude-longitude/comfirm-latitude-longitude.component';
import { ComfirmLatitudeService } from './comfirm-latitude.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLocationMapComponent } from './user-location-map/user-location-map.component';
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
    AddCourseComponent,
    ComfirmLatitudeLongitudeComponent,
    UserLocationMapComponent
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
    
  ],
  providers: [ComfirmLatitudeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
