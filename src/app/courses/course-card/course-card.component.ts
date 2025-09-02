import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {
  store: any;
  router: any;
  courseEntityService: any;
constructor(
  ){}

  @Input() course: Course | null = null;






}


