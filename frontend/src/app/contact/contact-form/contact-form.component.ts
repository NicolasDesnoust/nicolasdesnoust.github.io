import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import * as bulmaToast from 'bulma-toast';
import { take } from 'rxjs/operators';
import { RuntimeConfigService } from '../../core/services/runtime-config.service';
import { TurnstileService } from '../../core/services/turnstile.service';
import { ControlErrorDirective } from '../../shared/directives/control-error.directive';
import { SecuredExternalLinkDirective } from '../../shared/directives/secured-external-link.directive';
import { ContactService } from '../contact.service';

@Component({
  selector: 'desn-contact-form',
  standalone: true,
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ControlErrorDirective,
    SecuredExternalLinkDirective,
  ],
})
export class ContactFormComponent implements AfterViewInit {
  @ViewChild('turnstileContainer')
  private turnstileContainer?: ElementRef<HTMLElement>;

  contactForm: FormGroup;
  isSubmittingForm = false;
  turnstileReady = false;

  private readonly runtimeConfigService = inject(RuntimeConfigService);
  private readonly turnstileService = inject(TurnstileService);
  private turnstileWidgetId?: string;

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
      senderEmailAddress: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(320)],
      ],
    });
  }

  ngAfterViewInit(): void {
    const container = this.turnstileContainer?.nativeElement;
    if (!container) {
      return;
    }

    this.runtimeConfigService.runtimeConfig$
      .pipe(take(1))
      .subscribe((config) => this.renderTurnstile(container, config.turnstileSiteKey));
  }

  sendContactMessage(): void {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmittingForm = true;

    this.turnstileService.getToken(this.turnstileWidgetId).then(
      (turnstileToken) => this.send(turnstileToken),
      () => {
        this.isSubmittingForm = false;
        bulmaToast.toast({
          message:
            'The anti-bot challenge could not be completed. Please try again.',
          type: 'is-warning',
          duration: 7000,
        });
      }
    );
  }

  get f() {
    return this.contactForm.controls;
  }

  private renderTurnstile(container: HTMLElement, siteKey: string): void {
    if (!siteKey) {
      return;
    }

    this.turnstileService
      .render(container, {
        sitekey: siteKey,
        theme: 'auto',
        execution: 'execute',
        appearance: 'interaction-only',
        callback: (token) => this.turnstileService.settle(token),
        'error-callback': () => this.turnstileService.settle(),
      })
      .then((widgetId) => {
        this.turnstileWidgetId = widgetId;
        this.turnstileReady = Boolean(widgetId);
      })
      .catch(() => {
        // Script failed to load (e.g. offline) or not in a browser: leave the
        // form disabled rather than allowing an unverified submission.
      });
  }

  private send(turnstileToken: string): void {
    this.contactService
      .sendContactMessage({
        subject: this.contactForm.value.subject,
        body: this.contactForm.value.body,
        sender: {
          name: this.contactForm.value.senderName,
          emailAddress: this.contactForm.value.senderEmailAddress,
        },
        turnstileToken,
      })
      .subscribe({
        next: () => {
          this.isSubmittingForm = false;
          bulmaToast.toast({
            message:
              'Your message was sent successfully. I will reply to you promptly!',
            type: 'is-success',
            duration: 7000,
          });
        },
        error: (err) => {
          this.isSubmittingForm = false;
          console.log(err);
          bulmaToast.toast({
            message:
              'Your message could not be sent. I recommend contacting me instead via <a href="https://www.linkedin.com/in/nicolas-desnoust" target="_blank" rel="noopener noreferrer">LinkedIn</a>.',
            type: 'is-danger',
            duration: 10000,
          });
        },
      });
  }
}
