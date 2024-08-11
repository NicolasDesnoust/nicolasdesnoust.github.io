import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'a[href]',
  standalone: true,
})
export class SecuredExternalLinkDirective {
  @HostBinding('attr.target') target = '_blank';
  @HostBinding('attr.rel') rel = 'noopener noreferrer';
}
