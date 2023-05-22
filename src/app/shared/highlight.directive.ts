import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // Директива рабочая.
  // Возможно стили, которые вы подключили перебивают фон и он не меняется
  // я попробовал для color, он меняется
  @HostBinding('style.color') backgroundColor: string | undefined;


  @HostListener('mouseenter') onMouseEnter() {
    console.log("mouseenter");
    this.backgroundColor = '#eee'; // Изменение цвета фона при наведении
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log("mouseleave");
    this.backgroundColor = ''; // Возвращение цвета фона к исходному
  }
}
