import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  bookForm = new FormGroup({
    // id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private bookService : BookService,private router:Router) { }

  ngOnInit(): void {
  }
  submit() {
    const book = this.bookForm.value;
    console.log(book);
    this.bookService.saveBook(book).subscribe(rs =>{
      console.log("thêm thành công")
    });
    this.bookForm.reset();
    this.router.navigate([""])
  }
  back(){
    this.router.navigate([""])
  }
}
