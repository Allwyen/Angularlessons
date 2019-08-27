import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  getName='';
  getEmail='';
  getMob='';
  getMsg='';

  onSubmit(data:NgForm)
  {
    console.log(data.value);

    this.apiservice.insertData(data.value).subscribe((response)=>{
      console.log(response);
    });
  }

  constructor(private apiservice:ApiService) { }

  ngOnInit() {
  }

}
