import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loginStart, loginSuccess, signupStart, signupSuccess } from './auth.action';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { setErrorMessage, setIsLoading } from 'src/app/shared/shared.action';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store:Store,
     private router: Router,
  ) {}
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        this.store.dispatch(setIsLoading({value:true}))
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setIsLoading({value:false}))
            return loginSuccess({ user: data });
          }),
          catchError((errorResponse)=>{
            this.store.dispatch(setIsLoading({value:false}))
          const errorMessage=  this.authService.getErrorMessage(errorResponse)
            return of(setErrorMessage({message:errorMessage}))
          })
        );
      }),
    );
  });
    signup$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(signupStart),
            exhaustMap((action) => {
                this.store.dispatch(setIsLoading({ value: true}));
                return this.authService.signup(action.email, action.password)
                    .pipe(
                        map((data) => {
                            this.store.dispatch(setIsLoading({ value: false}));
                          //  const signedUser = this.authService.formatUserData(data);
                            //this.authService.saveUserInLocalStorage(signedUser);
                            return signupSuccess({ user: data});
                        }),
                        catchError((errorResponse) => {
                            this.store.dispatch(setIsLoading({ value: false}));
                            const errorMessage = this.authService.getErrorMessage(errorResponse);
                            return of(setErrorMessage({ message: errorMessage}))
                        })
                    );
            })
        )
    })


     redirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(...[loginSuccess,signupSuccess]),
            tap((action) => {
                this.router.navigate(['/']);
            })
        )

}, { dispatch: false })
}
