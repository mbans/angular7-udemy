import { Directive, HostListener, Input, ElementRef, } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  //This is an input parameter to the directive
  @Input('format') format;

  //Gives us access to the DOM object that this directive lives in
  constructor(private el: ElementRef) { 
  }

  //HostListener allows us to subsribe to events within the HOST DOM object that the directive lines in, in this case 'onBlur' is the name of the DOM event.
  //<input type="text" appInputFormat [format]="'uppercase'">
  @HostListener('blur') onBlur() {
    console.log("On Blur...");

    //The nativeElement is acces tot he DOM object
    let value: string = this.el.nativeElement.value;
    if(this.format == 'lowercase') 
      this.el.nativeElement = value.toLowerCase();
    else
      this.el.nativeElement = value.toUpperCase();

  }

}
