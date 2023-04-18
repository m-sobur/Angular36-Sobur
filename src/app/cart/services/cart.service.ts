import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ProductModel[] = [];

  constructor() { }

  addItem(item: ProductModel): void {
    this.items.push(item);
  }

  getItems(): ProductModel[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

  calculateTotalPrice(): number {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}
