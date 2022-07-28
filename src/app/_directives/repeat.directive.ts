import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
})
export class RepeatDirective {
  @Input() appRepeat: number = 0;
  constructor(private tref: TemplateRef<any>, private vref: ViewContainerRef) {}
  ngOnInit(): void {
    for (let i = 0; i < this.appRepeat; i++) {
      this.vref.createEmbeddedView(this.tref, { index: i });
    }
  }
}
