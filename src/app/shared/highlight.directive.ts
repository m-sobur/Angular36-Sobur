import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.background-color') backgroundColor = 'red';


  @HostListener('mouseenter') onMouseEnter() {
    console.log("mouseenter");
    this.backgroundColor = '#eee'; // Изменение цвета фона при наведении
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("mouseleave");
    this.backgroundColor = ''; // Возвращение цвета фона к исходному
  }
}
