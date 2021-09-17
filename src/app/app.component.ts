import { Component } from '@angular/core';

@Component({
  selector: 'desn-root',
  template: ` <router-outlet></router-outlet> `,
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
export class AppComponent {}
