import { counterReducer } from "../counter/states/counter-reducer";
import { CounterState } from "../counter/states/counter-state";
import { CourseStates } from "../courses/state/course.states";
import { coursesReducer } from "../courses/state/courses.reducer";

  export interface AppState{
    counter:CounterState,
    courses:CourseStates
  }

export const appReducer={
  counter:counterReducer,
  courses:coursesReducer
}
