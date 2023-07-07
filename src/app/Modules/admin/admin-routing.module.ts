import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { TimelistComponent } from './Components/timelist/timelist.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { TransactionsComponent } from './Components/transactions/transactions.component';
import { RevievsComponent } from './Components/revievs/revievs.component';

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
        canActivate: [AuthGuard]
      },
      {
        path: 'update-product',
        component: AddProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        component: ProductListComponent,
        canActivate: [AuthGuard]
      },
    ],
  },
{
  path:'category',
  children:[
    {
      path:'',component:CategoryListComponent,
      
    },
  ]
},
{
  path:'orders',children:[
    {
      path:'',component:OrdersComponent,
      canActivate: [AuthGuard]
    }
  ]
},
{
  path:'customers',children:[
    {
      path:'',component:CustomersComponent,
      canActivate: [AuthGuard]
    }
  ]
},
{
  path:'transactions',children:[
    {
      path:'',component:TransactionsComponent,
      canActivate: [AuthGuard]
    }
  ]
},
{
  path:'reviews',children:[
    {
      path:'',component:RevievsComponent,
      canActivate: [AuthGuard]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
