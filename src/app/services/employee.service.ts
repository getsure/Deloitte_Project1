import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string = "assets/employees2.json"
  //private url2: string = "https://fakestoreapi.com/products"

  constructor(private httpClient:HttpClient){ }

  getEmployees(){
    return this.httpClient.get(this.url)
  }
  
}
