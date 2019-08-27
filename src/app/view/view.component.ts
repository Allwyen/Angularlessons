import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private mydata:Array<object> = [];
 
  constructor(private apiservice:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  public fetchData()
  {
    this.apiservice.viewData().subscribe((response:Array<object>)=>{
      this.mydata=response;
    });
  }

}
