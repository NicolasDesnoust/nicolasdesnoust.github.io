import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactPageComponent } from './contact-page.component';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [ContactPageComponent, ContactFormComponent],
  imports: [
    SharedModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ContactModule {}
