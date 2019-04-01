import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor = '#ed5769'
  }



}
