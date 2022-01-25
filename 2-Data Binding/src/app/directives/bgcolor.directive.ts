import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {

  constructor(private el: ElementRef) { 

    this.el.nativeElement.style.backgroundColor = 'aqua';
    this.el.nativeElement.style.color = 'black';
    // this.el.nativeElement.style.border-radius = 'black';
    
  }

}
