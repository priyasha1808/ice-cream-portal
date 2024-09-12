import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Myhighlight]'
})
export class MyhighlightDirective {

  @Input() Myhighlight:string='';
  constructor(private ele:ElementRef) { }

  @HostListener('mouseover')
  high(){
    this.ele.nativeElement.style.backgroundColor=this.Myhighlight;
  }

  @HostListener('mouseout')
  high1(){
    this.ele.nativeElement.style.backgroundColor="";
  }

}
