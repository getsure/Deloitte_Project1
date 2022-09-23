import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyColor]'
})
export class MyColorDirective {

  constructor(private eleRef:ElementRef, rend2:Renderer2) {
    rend2.addClass(eleRef.nativeElement, 'mystyles')
   }

}
