import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContactMessage } from './model/contact-message';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = `${environment.backendUrl}/contact-messages`;

  constructor(private http : HttpClient) { }

  sendContactMessage(contactMessage: ContactMessage): Observable<any> {
    return this.http.post<any>(this.baseUrl, contactMessage);
  }
}
