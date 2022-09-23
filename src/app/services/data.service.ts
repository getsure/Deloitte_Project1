import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data:any = ['chiru', 'ramesh' ,'suresh']
  private bs = new BehaviorSubject(this.data) 
  obs = this.bs.asObservable();

  updatedData(changeData:any){
    this.bs.next(changeData)
  }
}
