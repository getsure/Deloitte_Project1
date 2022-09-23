import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predefined-pipes',
  templateUrl: './predefined-pipes.component.html',
  styleUrls: ['./predefined-pipes.component.css']
})
export class PredefinedPipesComponent {
  myName:string = "suresh kumar"
  price:number = 523.45
  sysDate:any = new Date();
  product:object = {
    productId:101,
    productName:'samsung tv'
  }
}
