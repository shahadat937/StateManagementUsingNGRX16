import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { HttpOptions } from "@ngrx/data/src/dataservices/interfaces";
import { map, Observable } from "rxjs";
import { environment } from "src/app/environments/environment";
import { Course } from "src/app/models/course.model";

@Injectable({
    providedIn:'root'
})
export class CourseDataService extends DefaultDataService<Course>{
constructor(
     http:HttpClient,
     httpUrlGenerator:HttpUrlGenerator){
    super('Course',http,httpUrlGenerator)
}
override getAll(options?: HttpOptions): Observable<Course[]> {
     return this.http.get(
                `${environment.firebaseConfig.databaseURL}/courses.json`
            ).pipe(
                map((data) => {
                    console.log(data)
                    const courses: Course[] = [];
                    for(let key in data){
                        const course = {...data[key], id: key};
                        console.log(course)
                        courses.push(course);
                    }
                    return courses;
                })
            );
}
}