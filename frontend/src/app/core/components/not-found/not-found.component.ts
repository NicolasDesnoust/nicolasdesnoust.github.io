import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorMessage } from './error-message/error-message';

@Component({
  template: `
    <desn-error-message [errorMessage]="errorMessage"></desn-error-message>
  `,
  styles: [
    `
      :host {
        display: flex;
        padding-top: 2rem;
        padding-bottom: 8rem;
      }
    `,
  ],
})
export class NotFoundComponent {
  errorMessage: ErrorMessage = {
    image: {
      url: 'assets/images/common/not-found.svg',
      realWidth: 860.13137,
      realHeight: 571.14799,
      desiredWidth: 300,
    },
    title: "La page demandée n'a pas été trouvée",
    message:
      "Vous pouvez retourner à la page d'accueil en cliquant sur le bouton ci-dessous.",
    button: {
      label: "Aller à l'accueil",
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
