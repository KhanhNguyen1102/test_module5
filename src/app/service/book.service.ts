import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";
const API_URl="http://localhost:3000/books"
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Book[]>{
    return this.httpClient.get<Book[]>(API_URl)
  }
  findById(id:any):Observable<Book>{
    return this.httpClient.get<Book>(API_URl+`/${id}`)
  }
  saveBook(book:Book):Observable<Book>{
    return this.httpClient.post<Book>(API_URl,book)
  }
  deleteBook(id:any){
    return this.httpClient.delete<Book>(API_URl+`/${id}`)
  }
  updateBook(book:Book,id:any):Observable<Book>{
    return this.httpClient.put<Book>(API_URl+`/${id}`,book)
  }
}
