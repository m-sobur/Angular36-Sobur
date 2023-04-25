import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product-model';
import { ProductsService } from '../../services/products-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: ProductModel[];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAddToCartParent(product: ProductModel): void {
    this.cartService.addItem(product);
    console.log(`Product ${product.name} has been added to cart!`);
  }
}

