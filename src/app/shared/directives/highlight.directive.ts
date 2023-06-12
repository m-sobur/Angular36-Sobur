import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostBinding('style.background-color') backgroundColor = 'red';


  @HostListener('mouseenter')
  onMouseEnter() {
    console.log("mouseenter");
    this.backgroundColor = "purple"; // Изменение цвета фона при наведении
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("mouseleave");
    this.backgroundColor = ''; // Возвращение цвета фона к исходному
  }
}
