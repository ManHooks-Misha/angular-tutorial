import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input() imgUrl:string="https://th.bing.com/th/id/OIP.XXWKhZZeWjrUPx-ZSfP0GAHaDt?w=340&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  @Input() name="NA"
  @Input() designation="NA"
  @Input() bio="NA"

  @Output() SelectedEmployeeChanged = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }
  OnEmployeeSelected(curEvent){
    //console.log(curEvent)
    this.SelectedEmployeeChanged.emit(this.name);
  }


}
