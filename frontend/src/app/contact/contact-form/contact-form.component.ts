import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bulmaToast from 'bulma-toast';
import { finalize } from 'rxjs/operators';
import { ContactService } from '../contact.service';
@Component({
  selector: 'desn-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmittingForm = false;

  constructor(fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = fb.group({
      subject: [
        'Organisons un entretien téléphonique',
        [Validators.required, Validators.maxLength(200)],
      ],
      body: [
        "Bonjour,\n Je suis intéressé·e par votre profil et j'aimerais en discuter de vive-voix.\n Merci de me recontacter !",
        [Validators.required, Validators.maxLength(5000)],
      ],
      senderName: ['', [Validators.required, Validators.maxLength(200)]],
      senderEmailAddress: ['', [Validators.required, Validators.email, Validators.maxLength(320)]],
    });
  }

  sendContactMessage() {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmittingForm = true;

    this.contactService
      .sendContactMessage({
        subject: this.contactForm.value.subject,
        body: this.contactForm.value.body,
        sender: {
          name: this.contactForm.value.senderName,
          emailAddress: this.contactForm.value.senderEmailAddress,
        },
      })
      .pipe(finalize(() => (this.isSubmittingForm = false)))
      .subscribe(
        () => {
          bulmaToast.toast({
            message:
              'Votre message a bien été envoyé. Je vous répondrais dans les plus bref délais !',
            type: 'is-success',
            duration: 7000,
          });
        },
        () => {
          bulmaToast.toast({
            message:
              'Votre message n\'a pas pu être envoyé. Je vous conseille de me contacter plutôt via <a href="https://www.linkedin.com/in/nicolas-desnoust" target="_blank" rel="noopener noreferrer">Linkedin</a>',
            type: 'is-danger',
            duration: 10000,
          });
        }
      );
  }

  get f() {
    return this.contactForm.controls;
  }
}
