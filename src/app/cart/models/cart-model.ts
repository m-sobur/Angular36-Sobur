import { ProductModel } from "src/app/products/models/product-model";

export class CartItem {
  public product: ProductModel;
  public quantity: number;

  constructor(product: ProductModel, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
}

export interface CartModel {
  items: CartItem[];
}
