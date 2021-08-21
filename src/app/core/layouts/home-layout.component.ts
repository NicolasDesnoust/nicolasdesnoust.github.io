import { Component } from '@angular/core';

@Component({
  selector: 'desn-home-layout',
  template: `
    <desn-navbar></desn-navbar>
    <section class="contenu">
      <router-outlet></router-outlet>
    </section>
    <desn-resume-call-to-action></desn-resume-call-to-action>
    <desn-footer></desn-footer>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
      }
      :host ::ng-deep .navbar {
        background-color: white !important;
      }
    `,
  ],
})
export class HomeLayoutComponent {}
