import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: ProductModel;

  @Output() addProductToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>;

  onAddToCart(): void {
    this.addProductToCart.emit(this.product);
  }
}
