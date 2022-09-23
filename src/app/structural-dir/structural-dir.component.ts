import { Component} from '@angular/core';

@Component({
  selector: 'app-structural-dir',
  templateUrl: './structural-dir.component.html',
  styleUrls: ['./structural-dir.component.css']
})
export class StructuralDirComponent  {
  isProductAvailable:boolean = false;
  course:string = "angular"
  products:string[] = ['tv', 'mobile', 'fan']
}
