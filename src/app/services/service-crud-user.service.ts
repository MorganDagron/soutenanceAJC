import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../pages/user/user';

@Injectable({
  providedIn: 'root',
})
export class ServiceCrudUserService {
  private apiUrl = 'http://localhost:46926/api/users';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  FindByMail(mail: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}?mail=${mail}`, this.httpOptions);
  }

  UpdateUser(data: any): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.put(
      'http://localhost:46926/api/users/',
      body,
      this.httpOptions
    );
  }

  DeleteUser(mail: string): Observable<any> {
    return this.http.delete(
      'http://localhost:46926/api/users?mail=' + mail,
      this.httpOptions
    );
  }

  AddUser(data: User): Observable<any> {
    const body = JSON.stringify(data);
    console.log('Sending user data: ' + body);
    return this.http.post(
      'http://localhost:46926/api/users/',
      body,
      this.httpOptions
    );
  }
}
