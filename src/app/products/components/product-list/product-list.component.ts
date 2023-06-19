import { Component, Directive, HostBinding, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product-model';
import { ProductsService } from '../../services/products.service';
import { Observable } from 'rxjs';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: Observable<ProductModel[]>

  selectedSortParam!: string;
  isAsc: boolean = true;


  constructor(
    public orderByPipe: OrderByPipe,
    private productsService: ProductsService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAddToCartParent(product: ProductModel): void {
    this.cartService.addProduct(product);
    console.log(`Product ${product.name} has been added to cart!`);
  }

  onSortParamChange(event: any) {
    this.selectedSortParam = event.target.value;
  }

}

