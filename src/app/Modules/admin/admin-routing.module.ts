import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
