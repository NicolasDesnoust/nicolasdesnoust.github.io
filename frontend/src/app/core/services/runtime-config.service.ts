import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, ReplaySubject, catchError, throwError } from 'rxjs';
import { RuntimeConfig } from '../model/runtime-config';

@Injectable({
  providedIn: 'root',
})
export class RuntimeConfigService {
  private readonly runtimeConfigSubject = new ReplaySubject<RuntimeConfig>(1);

  constructor(
    private httpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadRuntimeConfig();
    }
  }

  get runtimeConfig$(): Observable<RuntimeConfig> {
    return this.runtimeConfigSubject.asObservable();
  }

  private loadRuntimeConfig(): void {
    this.httpClient
      .get<RuntimeConfig>('/runtime-config.json')
      .pipe(
        catchError((error) => {
          console.error('Error: failed to load runtime configuration.', error);
          return throwError(() => error);
        })
      )
      .subscribe(this.runtimeConfigSubject);
  }
}
