import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../pages/article/article';

@Injectable({
  providedIn: 'root',
})
export class ServiceCrudArticleService {
  
  private apiUrl = 'http://localhost:46926/api/article/';

  list: Array<Article> = [];

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  GetArticleId(id: number): Observable<Article> {
    return this.http.get<Article>(this.apiUrl + id);
  }

  GetArticles(): Observable<Array<Article>> {
    return this.http.get<Array<Article>>(this.apiUrl);
  }

  AddArticles(data: Article): Observable<Article> {
    const body = JSON.stringify(data);
    return this.http.post<Article>(this.apiUrl, body, this.httpOptions);
  }

  UpdateArticles(data: Article): Observable<Article> {
    const body = JSON.stringify(data);
    return this.http.put<Article>(this.apiUrl, body, this.httpOptions);
  }

  DeleteArticles(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + id);
  }
}
