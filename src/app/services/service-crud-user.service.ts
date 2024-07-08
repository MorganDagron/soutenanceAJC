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
    this.http
      .put('http://localhost:46926/api/users/', body, this.httpOptions)
      .subscribe(
        (response) => {
          console.log('User updated successfully', response);
        },
        (error) => {
          console.error('Error updating user', error);
        }
      );
  }

  DeleteUser(id: number) {
    this.http.delete('http://localhost:46926/api/users/' + id).subscribe(
      (response) => {
        console.log('User deleted successfully', response);
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
  }

  AddUser(data: User) {
    const body = JSON.stringify(data);
    console.log('Sending user data: ' + body);

    this.http
      .post('http://localhost:46926/api/users/', body, this.httpOptions)
      .subscribe(
        (response) => {
          console.log('User created successfully', response);
        },
        (error) => {
          console.error('Error creating user', error);
        }
      );
  }
}
