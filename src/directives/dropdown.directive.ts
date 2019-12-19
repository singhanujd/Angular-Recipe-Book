import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isOpen = false;
  
  constructor(private _el: ElementRef) { }

  @HostListener('click') toogleOpen() {
    this.isOpen = !this.isOpen;
    this._el.nativeElement.querySelector('.dropdown-menu').classList.toggle('show');
  }
}
