import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appQueryTrim]',
})
export class QueryTrimDirective implements OnInit {
  constructor(private ref: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {}

  @HostListener('keyup', ['$event.target'])
  onKeyup(target: HTMLInputElement): void {
    const value = target.value;
    // this.ref.nativeElement.value = value.trim(); //not so good :)

    /**
     * This is a better way because sometimes your might not be running
     * on the browser. Like say if you are using serviceWorker to run your
     * app in the background
     * @see https://angular.io/api/core/Renderer2
     */
    this.renderer.setProperty(this.ref.nativeElement, 'value', value.trim()); //this a better way
  }
}
