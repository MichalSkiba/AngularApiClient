import {Component, OnInit} from '@angular/core';
import {BooksService} from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'aplikacji';
  tasks = ['dupa', 'blada', 'sie', 'polaczylo'];
  hero = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  books$: Book[];

  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.bookService.getBook().subscribe(book => this.books$ = book);
  }
}
export interface Book {

  id?: number;
  tytul?: string;
  autor?: string;
  stron?: number;
  cena?: number;
  url?: string;
  url2?: string;
}


