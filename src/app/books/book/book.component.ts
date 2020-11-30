import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() title: string;

  @Output() bookClicked = new EventEmitter();

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  onClicked() {
    this.bookService.deleteBook(this.title);
  }

}
