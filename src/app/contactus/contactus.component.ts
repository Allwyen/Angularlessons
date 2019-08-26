import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  getName='';
  getEmail='';
  getMsg='';

  onSubmit(data:NgForm)
  {
    this.getName=data.value.name;
    console.log(data.value.name);

    this.getEmail=data.value.email;
    console.log(data.value.email);
    
    this.getMsg=data.value.msg;
    console.log(data.value.msg);
  }

  constructor() { }

  ngOnInit() {
  }

}
