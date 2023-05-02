import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: ProductModel[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10.99,
      description: 'Description of product 1',
      available: true,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20.99,
      description: 'Description of product 2',
      available: false,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30.99,
      description: 'Description of product 3',
      available: true,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 40.99,
      description: 'Description of product 4',
      available: true,
    }
  ];

  constructor() { }

  getProducts(): ProductModel[] {
    return this.products;
  }
}
