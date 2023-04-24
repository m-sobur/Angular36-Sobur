import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';

import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: ProductModel;

  // тут тоже можно через output
  constructor(private cartService: CartService) { }

  onAddToCart(): void {
    this.cartService.addItem(this.product);
    console.log(`Product ${this.product.name} has been added to cart!`);
  }
}
