import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang7Routes';

constructor(private router:Router){}


GotoAboutus(){
this.router.navigate(["/about-us"]);
}

GotoProduct(){
  this.router.navigate(["/product","9"]);
}




}
