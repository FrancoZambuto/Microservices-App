import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksModule } from './books/books.module';

const routes: Routes = [{
  path: 'books',
  loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
