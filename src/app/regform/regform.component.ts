import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Article } from '../post';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  
  userId:number = 1
  currentPost:Article = new Article();
  
  constructor(private uS:UsersService) { }

  ngOnInit() {
  }

  addArticle(){
    this.currentPost.userId=1
    this.uS.postArticle(this.currentPost).subscribe( data => console.log(data))
  
  }


}
