import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { isNavigationEnd } from '../utils/navigation-typeguards';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title
  ) {
    this.router.events
      .pipe(
        filter(isNavigationEnd),
        map(() => this.getTitleFromRouteData())
      )
      .subscribe((title) => this.setPageTitle(title));
  }

  private getTitleFromRouteData(): string | null {
    let child = this.route.firstChild;

    while (child?.firstChild) {
      child = child.firstChild;
    }

    if (child?.snapshot.data && child.snapshot.data['title']) {
      return child.snapshot.data['title'];
    }

    return null;
  }

  private setPageTitle(title: string | null): void {
    return this.titleService.setTitle(
      (title || 'Portfolio') + ' — Nicolas Desnoust'
    );
  }
}
