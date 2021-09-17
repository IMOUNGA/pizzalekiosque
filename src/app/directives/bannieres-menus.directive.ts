import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appBannieresMenus]'
})
export class BannieresMenusDirective {
  @Input() backgroundImage?: string;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
    this._elementRef.nativeElement.style.color = 'red';
  }

}
