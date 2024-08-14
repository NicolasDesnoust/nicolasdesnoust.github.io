import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { ExtraOptions, provideRouter, withRouterConfig } from '@angular/router';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { routes } from './app.routes';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withRouterConfig(routerOptions)),
    importProvidersFrom(BrowserModule),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      MarkdownModule.forRoot({
        loader: HttpClient,
      })
    ),
    provideClientHydration(),
  ],
};
