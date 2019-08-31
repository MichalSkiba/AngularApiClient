import {Component, OnInit} from '@angular/core';
import {BooksService} from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Nowo powstałej Aplikacji';
  tasks = ['testy', 'testy', 'testy'];
  hero = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  books$: Book[];
  page = 1;
  filter: string;


  constructor(private bookService: BooksService) {}

  ngOnInit() {
    this.bookService.getBook().subscribe(book => this.books$ = book);
  }

  onPageChange(page: number) {
    this.page = page;
    window.scrollTo(0, 420 );
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


