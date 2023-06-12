import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FontResizeDirective } from './directives/font-resize.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HighlightDirective,
    FontResizeDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    FontResizeDirective,
    OrderByPipe,
    CommonModule,
    FormsModule,
  ]
})
export class SharedModule { }
