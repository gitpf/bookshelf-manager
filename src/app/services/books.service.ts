import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}

  public getBooks(query: string): Observable<any> {
    const params = new HttpParams()
      .set('q', query)
      .set('langRestrict', 'en')
      .set('printType', 'books');

    return this.http.get<any>('https://www.googleapis.com/books/v1/volumes', {
      params,
    });
  }
}
