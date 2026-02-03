import { createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { loginSuccess, signupSuccess } from "./auth.action";

export const authReducer=createReducer(
   initialState,on(loginSuccess,(state,action)=>{
      return{
         ...state,
         user:action.user
      }
   }) ,
   on(signupSuccess,(state,action)=>{
   return {
      ...state,
      user:action.user
   }
   })
)