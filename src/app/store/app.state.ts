import { authReducer } from "../auth/states/auth.reducer";
import { AuthState } from "../auth/states/auth.state";
import { AUTH_STATE } from "../constants";
import { counterReducer } from "../counter/states/counter-reducer";
import { CounterState } from "../counter/states/counter-state";
import { CourseStates } from "../courses/state/course.states";
import { coursesReducer } from "../courses/state/courses.reducer";

  export interface AppState{
   [AUTH_STATE]:AuthState
  }

export const appReducer={
[AUTH_STATE]:authReducer
}
