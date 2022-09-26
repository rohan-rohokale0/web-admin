import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'product',
    children: [
      {
        path: 'add',
        component: AddProductComponent,
      },
      {
        path: 'update-product',
        component: AddProductComponent,
      },
      {
        path: '',
        component: ProductListComponent,
      },
    ],
  },
{
  path:'category',
  children:[
    {
      path:'',component:CategoryListComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
