import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Book} from "../model/book";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book!:Book;
  id!:number;
  bookForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
  });
  constructor(private bookService : BookService,private router:Router,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.bookService.findById(this.id).subscribe(result => {
        this.book = result;
        this.bookForm.setValue(result)
        // this.bookForm = new FormGroup({
        //   id: new FormControl(result.id),
        //   name: new FormControl(result.name),
        //   country: new FormControl(result.country?.id),
        // });
        // // this.cityForm.setValue(result)
        // // Hoặc là setValue() cho cityForm
        // this.getListCountry();
      },error => {
        console.log(error);
      })
    })
  }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate([""])
  }
  submit() {
    const book1 = this.bookForm.value;
    this.bookService.updateBook(book1,book1.id).subscribe(result1 =>{
      console.log("sửa thành công")
    });
    this.bookForm.reset();
    this.router.navigate([""])
  }
}
