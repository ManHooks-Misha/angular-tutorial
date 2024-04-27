import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {
  
  userId:number = 1
  
  constructor(private uS:UsersService) { }

  ngOnInit() {
  }

  addArticle(data){
    this.uS.postArticle(data).subscribe( data => console.log(data))
  
  }


}
