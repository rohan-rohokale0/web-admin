import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Modules/auth/Compoents/sign-in/sign-in.component';
import { LayoutComponent } from './Modules/shared/Components/layout/layout.component';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'prefix',
  },
  {
    path: 'auth/sign-in', component: SignInComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin', component: LayoutComponent,canActivate: [AngularFireAuthGuard],
    loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
