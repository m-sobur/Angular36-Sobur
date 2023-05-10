import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';

  @ViewChild('appTitle', { static: true }) appTitle!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'My App Title';
  }
}
