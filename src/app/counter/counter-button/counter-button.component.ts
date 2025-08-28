import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../states/counter-actions';
import { CounterState } from '../states/counter-state';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
//   @Output()
//   incrementClicked:EventEmitter<void>=new EventEmitter<void>();

//   @Output()
//   decrementClicked:EventEmitter<void>=new EventEmitter<void>();

//   @Output()
//   resetClicked:EventEmitter<void>=new EventEmitter<void>();
// onIncrement(){
//   console.log('Increment clicked', this.incrementClicked.emit());
// this.incrementClicked.emit();

// }
// onDecrement(){
//   this.decrementClicked.emit();
// }
// onReset(){
//   this.resetClicked.emit();
// }
 constructor(private store: Store<{counter:CounterState}>) {

 }
  ngOnInit(){
     // 1️⃣ Subscribe to the whole store

  }
 onIncrement(){
   this.store.dispatch(increment());
 }
 onDecrement(){
   this.store.dispatch(decrement());
 }
 onReset(){
   this.store.dispatch(reset());
 }
}
