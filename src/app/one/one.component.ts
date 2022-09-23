import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  data:any;
  newData:any = []
  constructor(private dataService:DataService){
    dataService.obs.subscribe(res => this.data = res)
  }
  
  updateData(){
    this.data.pop();

    //this.newData = this.data.slice(1,3); 
     this.dataService.updatedData([...this.data])
  }
}
