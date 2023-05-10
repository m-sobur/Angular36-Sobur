import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product-model';
import { CartItem, CartModel } from '../models/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartModel = { items: [] }

  constructor() { }

  getProducts(): CartItem[] {
    return this.cart.items
  }

  getTotalCost(): number {
    return this.cart.items.reduce((total, item) => {
      return total + (item.product?.price ?? 0) * item.quantity
    }, 0)
  }

  getTotalQuantity(): number {
    return this.cart.items.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  isEmpty(): boolean {
    return this.cart.items.length === 0
  }

  addProduct(product: ProductModel): void {
    let index: number = this.cart.items.findIndex(e => e.product.id === product.id)
    if (index >= 0) {
      this.cart.items[index] = {
        product: this.cart.items[index].product,
        quantity: this.cart.items[index].quantity + 1
      }
    } else {
      this.cart.items.push({product: product, quantity: 1})
    }
  }

  removeProduct(product: ProductModel, isForAll?: boolean): void {
    let index: number = this.cart.items.findIndex(i => i.product.id === product.id);
    let currentItem: CartItem = this.cart.items[index];
    if (!currentItem) return;

    if (this.cart.items[index].quantity > 1 && !isForAll) {
      this.cart.items[index] = {
        product: currentItem.product,
        quantity: currentItem.quantity - 1,
      };
    } else {
      this.cart.items.splice(index, 1);
    }
  }
}
