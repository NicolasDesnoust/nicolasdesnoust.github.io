import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  ExtraOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router';

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
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
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
