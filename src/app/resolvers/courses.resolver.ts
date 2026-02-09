import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { first, tap } from "rxjs";
import { CourseEntityService } from "../courses/services/course-entity-service";

export const coursesResolver: ResolveFn<boolean> = () => {
    const courseEntityService: CourseEntityService = inject(CourseEntityService)
    
    return courseEntityService.loaded$.pipe(
        tap(loaded => {
            if(!loaded){
                courseEntityService.getAll();
            }
        }),
        first()
    )
}