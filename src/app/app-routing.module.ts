import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./list-book/list-book.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";

const routes: Routes = [
  {
    path:'',
    component:ListBookComponent
  },
  {
    path:'detail/:id',
    component :BookDetailComponent
  },
  {
    path:'create',
    component :CreateBookComponent
  },
  {
    path:'delete/:id',
    component :DeleteBookComponent
  },
  {
    path:'edit/:id',
    component :EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
