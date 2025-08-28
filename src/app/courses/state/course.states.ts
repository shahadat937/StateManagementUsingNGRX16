import { Course } from "src/app/models/course.model"

export interface CourseStates{
courses:Course[]
}
export const initialState:CourseStates={
courses:[]
}
