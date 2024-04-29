import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Article } from '../post';

@Component({
  selector: 'app-apilist',
  templateUrl: './apilist.component.html',
  styleUrls: ['./apilist.component.css']
})
export class ApilistComponent implements OnInit {

  usersList:Article[] =[];
  
  constructor(private uS:UsersService) { }

  ngOnInit() {
    this.uS.getUsers().subscribe( data => this.usersList=data);
  }



}
