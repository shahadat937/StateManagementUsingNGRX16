import { authReducer } from "../auth/states/auth.reducer";
import { AuthState } from "../auth/states/auth.state";
import { AUTH_STATE } from "../constants";
import { counterReducer } from "../counter/states/counter-reducer";
import { CounterState } from "../counter/states/counter-state";
import { CourseStates } from "../courses/state/course.states";
import { coursesReducer } from "../courses/state/courses.reducer";
import { sharedReducer } from "../shared/shared.reducer";
import { SharedState } from "../shared/shared.state";

  export interface AppState{
   auth:AuthState,
   shared:SharedState
  }

export const appReducer={
auth:authReducer,
shared:sharedReducer
}
