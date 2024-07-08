import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Auth } from './auth';
@Injectable({
  providedIn: 'root',
})
export class ServiceCrudAuthService {
  list: any;
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  AddAuth(data: Auth) {
    const body = JSON.stringify(data);
    this.http.post('http://localhost:46926/api/Authentification/', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  UpdateAuth(data: Auth) {
    const body = JSON.stringify(data);
    this.http.put('http://localhost:46926/api/Authentification/', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  DeleteAuth(data: any) {
    const body = JSON.parse(data);
    const login = body.login;
    this.http.delete('http://localhost:46926/api/Authentification/' + login);
  }

  Login(data: Auth) {
    const body = JSON.stringify(data);
    this.http.post('http://localhost:46926/api/Authentification/', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
