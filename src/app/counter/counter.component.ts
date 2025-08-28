import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 counter:number=0
onIncrementCount(){
this.counter++;
}
onDecrementCount(){
this.counter--;
}
onResetCount(){
this.counter=0;
}
}
