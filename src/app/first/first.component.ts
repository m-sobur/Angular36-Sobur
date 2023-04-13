import { Component } from '@angular/core';

enum Category {
  Category1 = 'Category1',
  Category2 = 'Category2',
  Category3 = 'Category3'
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {
  name: string = 'Product name';
  description: string = 'Product description';
  price: number = 100;
  category: Category = Category.Category1;
  isAvailable: boolean = false;

  categories = Object.values(Category);
}
