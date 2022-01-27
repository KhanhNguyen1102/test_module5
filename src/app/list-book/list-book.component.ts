import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  books!:Book[];
  constructor(private bookService : BookService,private router:Router) { }

  ngOnInit(): void {
    this.bookService.getAll().subscribe(result => {
      this.books = result;
      console.log(result);
    },error => {
      console.log(error);
    })
  }
  showDetail(id:any):void{
    this.router.navigate(["detail/" + id])
  }
  showFormCreate():void{
    this.router.navigate(["create"])
  }
  showFormEdit(id:any):void{
    this.router.navigate(["edit/" +id])
  }
  deleteBook(id:any) :void{
    this.router.navigate(["delete/" +id])
  }
}
