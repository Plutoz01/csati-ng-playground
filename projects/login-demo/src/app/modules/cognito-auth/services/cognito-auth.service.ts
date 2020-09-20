import { Injectable } from '@angular/core';
import Amplify from 'aws-amplify';
import { environment } from 'projects/login-demo/src/environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

@Injectable({
  providedIn: 'root',
})
export class CognitoAuthService {
  private readonly authStateSubject: Subject<AuthState | undefined> = new BehaviorSubject(undefined);
  private readonly userSubject: Subject<CognitoUserInterface | undefined> = new BehaviorSubject(undefined);

  constructor() {
    Amplify.configure({
      Auth: environment.auth.cognito,
    });

    onAuthUIStateChange((authState, authData) => {
      this.authStateSubject.next(authState);
      this.userSubject.next(authData as CognitoUserInterface);
    })
  }

  public get authState$(): Observable<AuthState | undefined> {
    return this.authStateSubject.asObservable();
  }

  public get user$(): Observable<CognitoUserInterface | undefined> {
    return this.userSubject.asObservable();
  }
}
