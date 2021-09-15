import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'colorField'
})
export class CampoColoridoDirective {

  @Input('appCampoColorido')
  public color: string = 'green';

  @HostBinding('style.backgroundColor')
  private backColor!: string

  @HostListener('focus')
  isFocusAlternative() {
    this.backColor = this.color;
  }

  @HostListener('blur')
  isNotFocusAlternative() {
    this.backColor = 'transparent'
  }

  // constructor(
  //   private elementRef: ElementRef,
  //   private renderer: Renderer2
  //   ) {}

  // @HostListener('focus')
  // isFocus() {
  //   this.renderer.setStyle(this.elementRef.nativeElement,
  //     'background-color', 'blue');
  // }

  // @HostListener('blur')
  // isNotFocus() {
  //   this.renderer.setStyle(this.elementRef.nativeElement,
  //     'background-color', 'transparent');
  // }

}
