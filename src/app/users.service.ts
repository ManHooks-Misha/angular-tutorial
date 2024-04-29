import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './post';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BaseURL: String ="https://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) { }

  getUsers():Observable<Article[]>{
    return this.http.get<Article[]>(this.BaseURL+"posts");
  }

  postArticle(postedData:Article):Observable<Article> {
    return this.http.post<Article>(this.BaseURL+"posts",postedData);
  }


}
