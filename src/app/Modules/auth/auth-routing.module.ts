import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Compoents/sign-in/sign-in.component';
import { SignUpComponent } from './Compoents/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'sign-up', component: SignUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
