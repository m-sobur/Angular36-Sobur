import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { ProductsService } from '../../services/products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProducts();
  }
}

