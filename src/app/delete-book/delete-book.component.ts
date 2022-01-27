import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
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
  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe(rs =>{
      console.log("xóa thành công")
      this.router.navigate([""])
      // this.bookService.getAll().subscribe(result => {
      //   this.cities = result;
      //   console.log(result);
      // },error => {
      //   console.log(error);
      // })
    },er => {
      console.log(er)
    })
  }
}
