import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { HttpOptions } from "@ngrx/data/src/dataservices/interfaces";
import { Update } from "@ngrx/entity";
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

override add(entity: Course, options?: HttpOptions): Observable<Course> {
     const url = `${environment.firebaseConfig.databaseURL}/courses.json`
        return this.http.post<{name: string}>(url, entity).pipe(map(data=>{
            return {...entity,id:data.name}
        }))
}
override update(update: Update<Course>, options?: HttpOptions): Observable<Course> {
      return this.http.put<Course>(
            `${environment.firebaseConfig.databaseURL}/courses/${update.id}.json`,
            {...update.changes}
        )
}
override delete(id:string): Observable<string> {
     return this.http.delete(
            `${environment.firebaseConfig.databaseURL}/courses/${id}.json`
        ).pipe(map(data=>{
            return id
        }))
}
}