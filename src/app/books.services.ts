import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id?: number;
  tytul?: string;
  autor?: string;
  stron?: number;
  cena?: number;
  url?: string;
  url2?: string;
}

@Injectable({providedIn:'root'})
export class BooksService {
  private readonly apiUrl = '/api';
  constructor(private readonly http: HttpClient) {}
  getBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
}
