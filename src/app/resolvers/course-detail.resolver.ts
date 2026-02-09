import { ResolveFn } from "@angular/router";
import { createActionGroup, Store } from "@ngrx/store";
import { CourseService } from "../courses/services/course.service";
import { inject } from "@angular/core";
import { getRouterParams } from "../store/router/router.selector";
import { catchError, map, of, switchAll, switchMap, take } from "rxjs";


// export const courseDetailResolver:ResolveFn<boolean>=()=>{
//     const store:Store=inject(Store);
//     const courseSerice:CourseService=inject(CourseService);

//    return store.select(getRouterParams).pipe(
//         take(1),
//         switchMap(params=>{
//             const id=params['id'];

//             if(!id){
//                 return of(false);
//             }
//             return store.select(getCourse).pipe(
//                 take(1),
//                 switchMap(courses=>{
//                        if(courses.find(c=>c.id===id)){
//                         return of(true)
//                        }else{
//                         return courseSerice.getCourseById(id).pipe(
//                             map(course=>{
//                                 store.dispatch(createCourseSuccess({course:{...course,id}}));
//                                 return true;
//                             }),
//                             catchError(errror=>{
//                                 return of(false)
//                             })
//                         )
//                        }
//                 })
//             )
//         })
//     )
// }
