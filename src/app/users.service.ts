import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  BaseURL: String ="https://jsonplaceholder.typicode.com/"

  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get(this.BaseURL+"posts");
  }

  postArticle(postData:any):Observable<any>{
    return this.http.post(this.BaseURL+"posts",postData);
  }


}
