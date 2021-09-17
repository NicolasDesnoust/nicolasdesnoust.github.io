import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[href]',
})
export class SecuredExternalLinkDirective {
  @HostBinding('attr.target') target = '_blank';
  @HostBinding('attr.rel') rel = 'noopener noreferrer';
}
