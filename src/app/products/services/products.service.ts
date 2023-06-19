import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: ProductModel[] = [
    {
      id: 3,
      name: 'Product 3',
      price: 10,
      description: 'Description of product 1',
      available: true,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      description: 'Description of product 2',
      available: false,
    },
    {
      id: 1,
      name: 'Product 1',
      price: 30,
      description: 'Description of product 3',
      available: true,
    },
    {
      id: 5,
      name: 'Product 5',
      price: 50,
      description: 'Description of product 5',
      available: false,
    },
    {
      id: 4,
      name: 'Product 4',
      price: 40,
      description: 'Description of product 4',
      available: true,
    }
  ];

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return of(this.products);
  }
}
