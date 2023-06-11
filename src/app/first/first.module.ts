import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    FirstComponent
  ]
})
export class FirstModule { }
