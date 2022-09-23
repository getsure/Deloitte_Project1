import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() camount:any;

  @Output() notify: EventEmitter<number> = new EventEmitter<number>();

  passDataFromChildToParent(){
    this.notify.emit(101)
  }
}
