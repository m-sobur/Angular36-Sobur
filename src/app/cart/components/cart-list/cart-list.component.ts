import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  quantityStep: number = 1

   constructor(private cartService: CartService) {}

  onQuantityIncrease(product: ProductModel) {
    this.cartService.increaseQuantity(product, this.quantityStep)
  }

  onDeleteItem(product: ProductModel) {
    this.cartService.removeProduct(product, true)
  }

  onQuantityDecrease(product: ProductModel) {
    this.cartService.decreaseQuantity(product, this.quantityStep)
  }

  onClearCart() {
    this.cartService.removeAllProducts();
  }

  get products(): {product: ProductModel, quantity: number}[] {
    return this.cartService.products
  }

  getTotalCost(): number {
    return this.cartService.totalCost
  }

  getTotalQuantity(): number {
    return this.cartService.totalQuantity
  }

  isEmpty(): boolean {
    return this.cartService.isEmpty()
  }
}
