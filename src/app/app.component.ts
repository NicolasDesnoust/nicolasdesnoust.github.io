import { Component } from '@angular/core';

@Component({
  selector: 'desn-root',
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
    `,
  ],
})
export class AppComponent {
  title = 'portfolio';
}
