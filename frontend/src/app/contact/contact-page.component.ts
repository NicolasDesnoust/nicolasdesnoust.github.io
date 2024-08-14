import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'desn-contact-page',
  standalone: true,
  template: ` <desn-contact-form /> `,
  imports: [ContactFormComponent],
})
export class ContactPageComponent {}
