import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { FontResizeDirective } from './font-resize.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    FontResizeDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    FontResizeDirective,
  ]
})
export class SharedModule { }
