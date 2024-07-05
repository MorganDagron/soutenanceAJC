import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../pages/article/article';

@Injectable({
  providedIn: 'root',
})
export class ServiceCrudArticleService {
  list: any;
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GetArticleId(id: any): void {
    let article: any;
    this.http
      .get('http://localhost:46926/api/article/' + id)
      .subscribe((data) => {
        article = data;
      });
  }

  GetArticles(): void {
    this.http.get('http://localhost:46926/api/article/').subscribe((data) => {
      this.list = data;
    });
  }
  AddArticles(data: any) {
    const body = JSON.stringify(data);
    this.http.post('http://localhost:46926/api/article/', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  UpdateArticles(data: any) {
    const body = JSON.stringify(data);
    this.http.put('http://localhost:46926/api/article/', body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  DeleteArticles(data: any) {
    const body = JSON.stringify(data);
    this.http.delete('http://localhost:46926/api/article/' + data).subscribe();
  }
}
