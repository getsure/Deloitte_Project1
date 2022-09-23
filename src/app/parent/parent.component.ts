import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  {
  pamount:number = 100;
  childData:any;

  parentMethod(data:any){
     this.childData = data;
  }
}
