import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input()
  product!: ProductModel
  @Input()
  quantity!: number

  @Output()
  deleteItem: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output()
  quantityIncrease: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output()
  quantityDecrease: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onQuantityIncrease() {
    this.quantityIncrease.emit(this.product)
  }

  onQuantityDecrease() {
    this.quantityDecrease.emit(this.product)
  }

  onDeleteItem() {
    this.deleteItem.emit(this.product)
  }

  onDecreaseWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      return;
    }
    this.onQuantityDecrease();
  }

  onIncreaseWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      return;
    }
    this.onQuantityIncrease();
  }
}
