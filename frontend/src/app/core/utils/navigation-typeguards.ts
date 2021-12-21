import { Event, NavigationEnd, NavigationStart } from "@angular/router";

export function isNavigationStart(event: Event): event is NavigationStart {
  return event instanceof NavigationStart;
}

export function isNavigationEnd(event: Event): event is NavigationEnd {
  return event instanceof NavigationEnd;
}
