import { createReducer, on } from "@ngrx/store";
import { initialState } from "./course.states";
import { createCourse, showForm } from "./courses.action";

export const coursesReducer = createReducer(
    initialState,
    on(showForm, (state, action) => {
        return {
            ...state,
            showForm: action.value
        }
    }),
    on(createCourse, (state, action) => {
      const course={...action.course,id:state.courses.length+1};
        return {
            ...state,
            courses: [...state.courses, course]
        }
    })
)
