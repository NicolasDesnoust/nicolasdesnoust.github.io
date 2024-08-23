import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ErrorMessage } from './error-message/error-message';
import { ErrorMessageComponent } from './error-message/error-message.component';

@Component({
  template: ` <desn-error-message [errorMessage]="errorMessage" /> `,
  standalone: true,
  styles: [
    `
      :host {
        display: flex;
        padding-top: 2rem;
        padding-bottom: 8rem;
      }
    `,
  ],
  imports: [CommonModule, RouterModule, ErrorMessageComponent],
})
export class NotFoundComponent {
  errorMessage: ErrorMessage = {
    image: {
      url: 'images/common/not-found.svg',
      realWidth: 750,
      realHeight: 500,
      desiredWidth: 450,
    },
    title: 'Page not found',
    message: 'You can return to the homepage by clicking the button below.',
    button: {
      label: 'Go to Homepage',
      action: () => {
        this.navigateToHomePage();
      },
    },
  };

  constructor(private router: Router) {}

  navigateToHomePage(): void {
    this.router.navigate(['/']);
  }
}
