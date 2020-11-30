import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books = ['Book 1', 'Book 2', 'Book 3'];
  booksSubject = new Subject();

  constructor() { }

  // tslint:disable-next-line: typedef
  getBooks() {
    return [...this.books];
  }

  // tslint:disable-next-line: typedef
  addBook(bookName: string) {
    this.books.push(bookName);
    this.booksSubject.next();
  }

  // tslint:disable-next-line: typedef
  deleteBook(bookName: string) {
    this.books = this.books.filter(p => p !== bookName);
    this.booksSubject.next();
  }
}
