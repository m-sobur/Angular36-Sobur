import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ProductComponent,
    ProductListComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Правильно ли я сделал changelog.md?
// А так же интересует правильность Total Price в корзине как доп функционал к 8 шагу первого задания. Я долго сидел не мог понять как мне отобразить переменную totalPrice из Cart сервиса передать её на CartListComponent и вывести в шаблоне с помощью интерполяции, у меня всегда она была 0, я не понимаю почему так выходит.

// Сейчас тотал работает, значит вы решили эту задачу
