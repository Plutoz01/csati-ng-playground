import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CognitoAuthModule } from './modules/cognito-auth/cognito-auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CognitoAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
