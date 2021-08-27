import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map } from 'rxjs/operators';

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
export class AppComponent {
  private lastUrl: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        this.lastUrl = this.router.url;
      }

      if (evt instanceof NavigationEnd) {
        if (
          !evt.urlAfterRedirects.startsWith('/home/projects/') &&
          !evt.urlAfterRedirects.startsWith('/projects/') &&
          !evt.urlAfterRedirects.startsWith('/home/puzzles/') &&
          !evt.urlAfterRedirects.startsWith('/codingame/puzzles/') &&
          !this.lastUrl.startsWith('/home/projects/') &&
          !this.lastUrl.startsWith('/projects/') &&
          !this.lastUrl.startsWith('/home/puzzles/') &&
          !this.lastUrl.startsWith('/codingame/puzzles/')
        ) {
          //if can't a route in predefined array, scroll to top
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'auto',
          });
        }
      }
    });

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.route.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            } else {
              return null;
            }
          }
          return null;
        })
      )
      .subscribe((title) =>
        this.titleService.setTitle(
          (title || 'Portfolio') + ' — Nicolas Desnoust'
        )
      );
  }
}
