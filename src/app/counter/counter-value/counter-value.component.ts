import { Component,Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../states/counter-state';
import { getcounter } from '../states/counter-selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-value',
  templateUrl: './counter-value.component.html',
  styleUrls: ['./counter-value.component.css']
})
export class CounterValueComponent
implements OnInit {
// @Input()
counter$:Observable<number> |null =null;
counterSubscription: Subscription|null=null;
 constructor(
  private store: Store<AppState>) {

 }
 ngOnInit(){
this.counter$=this.store.select(getcounter);
}
}
