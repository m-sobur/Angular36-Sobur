import { Component } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  cartItems: ProductModel[] = [];

  constructor(private cartService: CartService) {
    this.updateCartItems();
  }

  trackById(index: number, item: ProductModel): number {
    return item.id;
  }

  onClearCart(): void {
    this.cartService.clearCart();
    this.updateCartItems();
    console.log(`Cart clear`);
  }

  calculateTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  private updateCartItems(): void {
    this.cartItems = this.cartService.getItems();
  }
}
