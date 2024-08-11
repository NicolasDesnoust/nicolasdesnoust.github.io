import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageTitleService } from './core/services/page-title.service';
import { ScrollBehaviorService } from './core/services/scroll-behavior.service';

@Component({
  selector: 'desn-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
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
  constructor(
    _scrollBehaviorService: ScrollBehaviorService,
    _pageTitleService: PageTitleService
  ) {
    // ! Ces services sont injectés dans le constructeur du module pour qu'ils ne
    // ! soient pas supprimés par Angular (tree-shaking)
  }
}
