import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartItems!: ProductModel[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
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

  onRemoveItem(index: number): void {
    this.cartService.removeItem(index);
    this.updateCartItems();
  }

  calculateTotalPrice(): number {
    return this.cartService.calculateTotalPrice();
  }

  private updateCartItems(): void {
    this.cartItems = this.cartService.getItems();
  }
}
