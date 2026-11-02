import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book, BooksService } from './books.services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  readonly now = new Date();
  books: Book[] = [];
  filter = '';
  page = 1;
  readonly pageSize = 9;
  loading = true;
  error = '';

  constructor(private readonly booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBook().subscribe({
      next: books => { this.books = books; this.loading = false; },
      error: () => { this.error = 'Nie można pobrać listy książek z /api.'; this.loading = false; }
    });
  }

  get filteredBooks(): Book[] {
    const query = this.filter.trim().toLocaleLowerCase();
    return query ? this.books.filter(book =>
      [book.tytul, book.autor].some(value => (value ?? '').toLocaleLowerCase().includes(query))
    ) : this.books;
  }

  get pageCount(): number {
    return Math.max(1, Math.ceil(this.filteredBooks.length / this.pageSize));
  }

  get visibleBooks(): Book[] {
    const first = (this.page - 1) * this.pageSize;
    return this.filteredBooks.slice(first, first + this.pageSize);
  }

  searchChanged(): void { this.page = 1; }
  goToPage(value: number): void {
    this.page = Math.min(Math.max(1, value), this.pageCount);
  }
}
