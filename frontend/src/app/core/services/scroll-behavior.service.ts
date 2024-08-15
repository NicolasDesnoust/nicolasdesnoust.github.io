import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  isNavigationEnd,
  isNavigationStart,
} from '../utils/navigation-typeguards';

@Injectable({
  providedIn: 'root',
})
export class ScrollBehaviorService {
  private lastUrl: string = '';

  private readonly routePrefixesToIgnore = [
    '/home/projects/',
    '/projects/',
    '/home/puzzles/',
    '/codingame/puzzles/',
  ];

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.recordRouteChanges();
      this.handleScrollBehaviorOnRouteChange();
    }
  }

  private recordRouteChanges() {
    this.router.events
      .pipe(filter(isNavigationStart))
      .subscribe(() => (this.lastUrl = this.router.url));
  }

  private handleScrollBehaviorOnRouteChange() {
    this.router.events.pipe(filter(isNavigationEnd)).subscribe((event) => {
      let scrollToTop: boolean = true;

      for (let routePrefix of this.routePrefixesToIgnore) {
        if (
          event.urlAfterRedirects.startsWith(routePrefix) ||
          this.lastUrl.startsWith(routePrefix)
        ) {
          scrollToTop = false;
          break;
        }
      }

      if (scrollToTop) {
        this.scrollToTop();
      }
    });
  }

  private scrollToTop() {
    this.document.defaultView?.scroll({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }
}
