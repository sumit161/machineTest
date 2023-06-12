import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appShowClass]',
})
export class ShowClassDirective implements OnInit {
  istrue : boolean = false;

  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    console.log(this.eleRef.nativeElement.ParentElement);
  }
  @HostListener('click') onclick(){
    let Element = this.eleRef.nativeElement.ParentElement as any;
    console.log(Element);

   let m = (Element.classList)
    if(this.istrue===true){
     Element.nextElementSibling?.classList.remove("show")
    this.istrue = ! this.istrue
    }else{
      Element.nextElementSibling?.classList.add('show')
    this.istrue = ! this.istrue
    }
  }
}


