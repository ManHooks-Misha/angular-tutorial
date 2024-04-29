import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormControlName, Validators } from '@angular/forms';
import { Article } from '../post';
import { UsersService } from '../users.service';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-modelform',
  templateUrl: './modelform.component.html',
  styles: []
})
export class ModelformComponent implements OnInit {

  formData:FormGroup;

  constructor(private uS:UsersService) { }

  ngOnInit() {
    this.formData = new FormGroup(
      {title:new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ])),
      bio: new FormControl("Enter your bio ...", Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ]))}
    )
  }

  addArticle(postedData:Article){
    postedData.userId=1
    this.uS.postArticle(postedData).subscribe( data => console.log(data))
  
  }

}
