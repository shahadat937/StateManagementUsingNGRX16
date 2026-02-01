import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter-state";
import { COUNTER_STATE } from "src/app/constants";

const getcounterState=createFeatureSelector<CounterState>(COUNTER_STATE);
export const getcounter=createSelector(getcounterState,(state)=>state.counter);
export const getToggle=createSelector(getcounterState,(state)=>state.toggle);
