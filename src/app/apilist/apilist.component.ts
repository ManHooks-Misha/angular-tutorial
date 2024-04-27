import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-apilist',
  templateUrl: './apilist.component.html',
  styleUrls: ['./apilist.component.css']
})
export class ApilistComponent implements OnInit {

  usersList =[];
  
  constructor(private uS:UsersService) { }

  ngOnInit() {
    this.uS.getUsers().subscribe( data => this.usersList=data);
  }



}
