import { createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { loginSuccess } from "./auth.action";

export const authReducer=createReducer(
   initialState,on(loginSuccess,(state,action)=>{
      console.log(action.user)
      return{
         ...state,
         user:action.user
      }
   }) 
)