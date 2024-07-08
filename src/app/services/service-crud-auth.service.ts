import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root',
})
export class ServiceCrudAuthService {
  private apiUrl = 'http://localhost:46926/api/Authentification';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  AddAuth(data: Auth): Observable<any> {
    const body = JSON.stringify(data);
    console.log('Sending auth data: ' + body);
    return this.http.post(
      'http://localhost:46926/api/Authentification/create',
      body,
      this.httpOptions
    );
  }

  UpdateAuth(data: Auth): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.put(
      'http://localhost:46926/api/Authentification/',
      body,
      this.httpOptions
    );
  }

  DeleteAuth(data: any): Observable<any> {
    const login = JSON.parse(data).login;
    return this.http.delete(
      'http://localhost:46926/api/Authentification/' + login,
      this.httpOptions
    );
  }

  Login(data: Auth): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post<any>(`${this.apiUrl}/login`, body, this.httpOptions);
  }
}
