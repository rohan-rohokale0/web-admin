import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './Compoents/forgot-password/forgot-password.component';
import { SignInComponent } from './Compoents/sign-in/sign-in.component';
import { SignUpComponent } from './Compoents/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-up', component: SignUpComponent
  },
  {
    path: 'forgot-password', component: ForgotPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
