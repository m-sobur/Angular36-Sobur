import { NgModule } from '@angular/core';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ProductListComponent
  ],
  providers: [
    OrderByPipe,
  ]
})
export class ProductsModule { }
