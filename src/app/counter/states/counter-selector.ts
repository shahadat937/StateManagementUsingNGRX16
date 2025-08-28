import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter-state";

const getcounterState=createFeatureSelector<CounterState>('counter');
export const getcounter=createSelector(getcounterState,(state)=>state.counter);
export const getToggle=createSelector(getcounterState,(state)=>state.toggle);
