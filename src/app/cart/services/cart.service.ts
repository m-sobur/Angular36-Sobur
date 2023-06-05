import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product-model';
import { CartItem, CartModel } from '../models/cart-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartModel = { items: [] }

  constructor() { }

  get products(): CartItem[] {
    return [...this.cart.items];
  }

  get totalCost(): number {
    return this.cart.items.reduce((total, item) => {
      return total + (item.product?.price ?? 0) * item.quantity
    }, 0)
  }

  get totalQuantity(): number {
    return this.cart.items.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  }

  isEmpty(): boolean {
    return this.cart.items.length === 0
  }

  addProduct(product: ProductModel, qnt: number = 1): void {
    const index: number = this.cart.items.findIndex(e => e.product.id === product.id);
    if (index >= 0) {
      const updatedItems = [...this.cart.items];
      updatedItems[index] = {
        product: this.cart.items[index].product,
        quantity: this.cart.items[index].quantity + qnt
      };
      this.cart = { items: updatedItems };
    } else {
      const newItem: CartItem = { product, quantity: qnt };
      this.cart = { items: [...this.cart.items, newItem] };
    }
  }

  removeProduct(product: ProductModel, isForAll?: boolean): void {
    const updatedItems = this.cart.items.filter(item => item.product.id !== product.id);
    this.cart = { items: updatedItems };
  }

  increaseQuantity(product: ProductModel, qnt: number = 1): void {
    this.changeQuantity(product, qnt);
  }

  decreaseQuantity(product: ProductModel, qnt: number = 1): void {
    const currentItem: CartItem | undefined = this.cart.items.find(item => item.product.id === product.id);

    if (!currentItem || currentItem.quantity <= 1) {
      return;
    }

    this.changeQuantity(product, -qnt);
  }

  removeAllProducts(): void {
    this.cart = { items: [] };
  }

  private changeQuantity(product: ProductModel, quantityDelta: number): void {
    const index: number = this.cart.items.findIndex(i => i.product.id === product.id);
    if (index >= 0) {
      const updatedItems = [...this.cart.items];
      updatedItems[index] = {
        product: this.cart.items[index].product,
        quantity: this.cart.items[index].quantity + quantityDelta,
      };
      this.cart = { items: updatedItems };
    }
  }
}
