import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private mydata:Array<object> = [];
 
  constructor(private apiservice:ApiService) { }

  status=true;

  onSubmit(data:NgForm)
  {
    console.log(data.value);

    this.apiservice.searchData(data.value).subscribe((response:Array<object>)=>{
      this.mydata=response;
      alert(this.mydata);
    });
  }

  ngOnInit() {
  }

}
