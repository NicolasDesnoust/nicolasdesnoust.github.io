import { Component } from '@angular/core';

@Component({
  selector: 'desn-home-page',
  template: `
    <desn-hero></desn-hero>
    <desn-skills></desn-skills>
    <desn-projects></desn-projects>
    <div class="divider">ᔕ</div>
    <desn-codingame></desn-codingame>

    <router-outlet></router-outlet>
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
export class HomePageComponent {}
