import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { CognitoAuthComponent } from './components/cognito-auth/cognito-auth.component';

@NgModule({
  declarations: [CognitoAuthComponent],
  imports: [
    CommonModule,
    AmplifyUIAngularModule
  ],
  exports: [
    CognitoAuthComponent
  ]
})
export class CognitoAuthModule { }
