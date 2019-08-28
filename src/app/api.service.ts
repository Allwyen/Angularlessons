import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  insertData(data)
  {
    return this.http.post("http://localhost:4000/savedata",data)

  }
  viewData()
  {
    return this.http.get("http://localhost:4000/viewuserdata");
  }
  searchData(data)
  {
    return this.http.post("http://localhost:4000/usermobsearch",data);
  }
  deleteData(data)
  {
    return this.http.post("http://localhost:4000/userdelete",data);
  }
  updateData(data)
  {
    return this.http.post("http://localhost:4000/userupdate",data);
  }
}
