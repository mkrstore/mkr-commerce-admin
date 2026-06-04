import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({ selector: '[tdCell]', standalone: true })
export class CellDirective {
  @Input('tdCell') key = '';
  constructor(public tpl: TemplateRef<{ $implicit: any; row: any; index: number }>) {}
}
