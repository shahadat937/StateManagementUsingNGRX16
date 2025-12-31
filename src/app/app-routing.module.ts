import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { ComfirmLatitudeLongitudeComponent } from './comfirm-latitude-longitude/comfirm-latitude-longitude.component';
import { UserLocationMapComponent } from './user-location-map/user-location-map.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'ComfirmLatitudeLongitude', component: ComfirmLatitudeLongitudeComponent},
  {path: 'UserLocationMap', component: UserLocationMapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
