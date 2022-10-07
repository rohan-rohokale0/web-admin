import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './Compoents/sign-in/sign-in.component';
import { SignUpComponent } from './Compoents/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Compoents/forgot-password/forgot-password.component';
import { AuthService } from './Services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { BasicDetailsComponent } from './Compoents/basic-details/basic-details.component';


@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    BasicDetailsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule


  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [AuthService]
})
export class AuthModule { }
