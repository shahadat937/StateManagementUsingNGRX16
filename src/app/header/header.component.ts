import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from '../auth/states/auth.action';
import { getLoggedUser } from '../auth/states/auth.selector';
import { User } from '../models/user.model';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  loggedUser$: Observable<User>;
  ngOnInit(): void {
    this.loggedUser$ = this.store.select(getLoggedUser);
  }
  onLogoutClicked() {
    this.store.dispatch(logout());
  }
}
