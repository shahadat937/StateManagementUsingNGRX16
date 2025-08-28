import { createReducer, on } from "@ngrx/store";
import { initialState } from "./course.states";
import { getCourses } from "./courses.action";

export const coursesReducer=createReducer(initialState)
