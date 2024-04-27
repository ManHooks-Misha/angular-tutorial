import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ang7Routes';
  fahrenheitValue =77;
  SelectedEmployeeName="";

  ImageURL = "https://th.bing.com/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  Name="Narender"
  Designation ="Java Developer"
  Bio="Backend and Frontend Developer with 2+ lyers of exp"

  employees =[
    {Name:"Manoj",Designation:"Project Manager",Bio:"20 yrs exp",ImageURL:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"},
    {Name:"Narender",Designation:"Java Developer",Bio:"2+ yrs exp",ImageURL:"https://st.depositphotos.com/2931363/3703/i/450/depositphotos_37034497-stock-photo-young-black-man-smiling-at.jpg"},
    {Name:"Himanshu",Designation:"Asp.net Developer",Bio:"3 yrs exp",ImageURL:"https://t3.ftcdn.net/jpg/03/28/19/46/360_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg"},
    {Name:"Atul",Designation:".Net Developer",Bio:"2.5 yrs exp",ImageURL:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"}
  ]

constructor(private router:Router){}


GotoAboutus(){
this.router.navigate(["/about-us"]);
}

GotoProduct(){
  this.router.navigate(["/product","9"]);
}

SetCurrentEmployee(name){
  console.log(name)
  this.SelectedEmployeeName=name
}



}
