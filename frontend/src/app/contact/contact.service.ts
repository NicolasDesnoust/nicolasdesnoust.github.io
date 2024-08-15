import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { RuntimeConfigService } from '../core/services/runtime-config.service';
import { ContactMessage } from './model/contact-message';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly runtimeConfigService = inject(RuntimeConfigService);

  constructor(private http: HttpClient) {}

  sendContactMessage(contactMessage: ContactMessage): Observable<string> {
    return this.runtimeConfigService.runtimeConfig$.pipe(
      map((runtimeConfig) => runtimeConfig.backendUrl),
      switchMap((backendUrl) =>
        this.http.post<string>(
          `${backendUrl}/send-contact-mail`,
          contactMessage
        )
      )
    );
  }
}
