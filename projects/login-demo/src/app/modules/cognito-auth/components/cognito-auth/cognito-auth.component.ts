import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { CognitoAuthService } from '../../services/cognito-auth.service';

@Component({
  selector: 'pg-la-cognito-auth',
  templateUrl: './cognito-auth.component.html',
  styleUrls: ['./cognito-auth.component.scss']
})
export class CognitoAuthComponent implements OnInit{

  public readonly formFields: FormFieldTypes = [
    {
      type: "email",
      label: "Email",
      placeholder: "your email address",
      required: true,
    },
    {
      type: "password",
      label: "Password",
      placeholder: "your password",
      required: true,
    }
  ];
  public readonly signUpFormFields: FormFieldTypes = [
    {
      type: "email",
      label: "Custom email Label",
      placeholder: "custom email placeholder",
      required: true,
    },
    {
      type: "preferred_username",
      label: "User name",
      placeholder: "preferred username",
      required: true,
    },
    {
      type: "name",
      label: "Full name",
      placeholder: "full name",
      required: true,
    },
    {
      type: "password",
      label: "Custom Password Label",
      placeholder: "custom password placeholder",
      required: true,
    }
  ];

  public readonly authState$ = this.cogintoAuthService.authState$;
  public readonly user$ = this.cogintoAuthService.user$;

  constructor(private readonly cogintoAuthService: CognitoAuthService,
    private readonly changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.authState$.subscribe(
      authState => {
        console.log('Auth state: ', authState);
      }
    );
    this.user$.subscribe(
      user => {
        console.log('User: ', user);
        this.changeDetectorRef.detectChanges();
      }
    );
  }

  public get isSignedIn$(): Observable<boolean> {
    return this.authState$.pipe(
      map(state => state === 'signedin')
    );
  }
}
