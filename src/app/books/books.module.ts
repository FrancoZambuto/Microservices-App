import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { BooksRoutingModule } from './books.routing-module';



@NgModule({
  declarations: [
    BooksComponent,
    BookComponent
    ],
  exports: [
    BooksComponent,
    BookComponent,
    BooksRoutingModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
