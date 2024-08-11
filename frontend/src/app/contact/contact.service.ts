import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'frontend/src/environments/environment';
import { Observable } from 'rxjs';
import { ContactMessage } from './model/contact-message';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseUrl = `${environment.backendUrl}/send-contact-mail`;

  constructor(private http: HttpClient) {}

  sendContactMessage(contactMessage: ContactMessage): Observable<string> {
    return this.http.post<string>(this.baseUrl, contactMessage);
  }
}
