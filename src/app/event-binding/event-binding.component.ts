import { Component} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent  {
  result:any;
  addOperation(fno:any, sno:any){
     this.result = Number(fno)+Number(sno)
  }
}
