import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book!:Book;
  id!:number;
  constructor(private bookService : BookService,private router:Router,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.bookService.findById(this.id).subscribe(result => {
        console.log(result);
        this.book = result;
      },error => {
        console.log(error);
      })
    })
  }

  ngOnInit(): void {
  }
  back():void{
    this.router.navigate([""])
  }

}
