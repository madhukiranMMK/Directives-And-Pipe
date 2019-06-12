import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numOnly]'
})
export class ValidateInputFieldDirective {
  private regex: RegExp = new RegExp(/^([0-9]*)$/g);
  private regexChar: RegExp = new RegExp(/^[A-Za-z]+$/);
  id: string;
  private specialKeys: Array<string> = ['Backspace', 'Delete', 'Tab'];

  constructor(private el: ElementRef) {
  }
  @HostListener('input', ['$event'])
  onInputChange(event) {
    let current: string = this.el.nativeElement.value;

    if (String(current).match(this.regex)) {
      this.applyRequired(this.el.nativeElement.id, false);
      event.preventDefault();
    } else { 
      debugger;
      if (String(current).match(this.regexChar)) {
        this.applyRequired(this.el.nativeElement.id, true);
        event.preventDefault();
      }
    }
  }


  applyRequired(id: any, val: boolean) {
    if (val) {
      let elem: HTMLElement = document.getElementById(id);
      return elem.setAttribute("style", "border: 1px solid red;");
    }
    else {
      let elem: HTMLElement = document.getElementById(id);
      return elem.removeAttribute('style');
    }
  }

}


