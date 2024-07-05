import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../pages/user/user';

@Injectable({
  providedIn: 'root',
})
export class ServiceCrudUserService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
    }),
  };

  UpdateUser(data: any) {
    const body = JSON.stringify(data);
    this.http.put('http://localhost:46926/api/users/', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
  public DeleteUser(id:number) {
    this.http
      .delete('http://localhost:46926/api/users/' + id)
      .subscribe();
  }
}
