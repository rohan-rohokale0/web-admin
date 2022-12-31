import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimelistComponent } from './Modules/admin/Components/timelist/timelist.component';
import { SignInComponent } from './Modules/auth/Compoents/sign-in/sign-in.component';
import { WorkingComponent } from './working/working.component';

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
    path:'timelist', component:TimelistComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./Modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin', component: WorkingComponent, loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
