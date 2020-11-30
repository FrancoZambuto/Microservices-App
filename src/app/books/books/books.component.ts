import { Component, OnDestroy, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, OnDestroy {

  books: string[];
  private bookSubscription: Subscription;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getBooks();
    this.bookSubscription = this.booksService.booksSubject.subscribe( () => {
      this.books = this.booksService.getBooks();
    });
  }

  // tslint:disable-next-line: typedef
  deleteBook(book) {
    this.books = this.books.filter(p => p !== book);
  }

  // tslint:disable-next-line: typedef
  saveBook(f) {
    if (f.valid){
      this.booksService.addBook(f.value.bookName);
    }
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy(): void {
    this.bookSubscription.unsubscribe();
  }

}
