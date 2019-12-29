import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './app.component';
import {Observable} from 'rxjs';

@Injectable()
export class BooksService {
  apuUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getBook(): Observable<Array<Book>> {
    return this.http.get<Array<Book>>(this.apuUrl);
  }
}
