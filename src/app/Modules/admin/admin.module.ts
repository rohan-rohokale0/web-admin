import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { BarChartComponent } from './Components/bar-chart/bar-chart.component';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { TimelistComponent } from './Components/timelist/timelist.component';
import { ExportDirective } from './Direactives/export.directive';
import { OrdersComponent } from './Components/orders/orders.component';
import { CustomersComponent } from './Components/customers/customers.component';
import { RevievsComponent } from './Components/revievs/revievs.component';
import { TransactionsComponent } from './Components/transactions/transactions.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ProductListComponent,
    CategoryListComponent,
    AddProductComponent,
    AddCategoryComponent,
    TimelistComponent,
    ExportDirective,
    OrdersComponent,
    CustomersComponent,
    RevievsComponent,
    TransactionsComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule, ImageCropperModule],
})
export class AdminModule {}
