import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'disabled',
      })
    ),
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
