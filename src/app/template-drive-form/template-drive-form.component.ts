import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-drive-form',
  templateUrl: './template-drive-form.component.html',
  styleUrls: ['./template-drive-form.component.css']
})
export class TemplateDriveFormComponent  {
  submitData(data:any){
    console.log(data)
    //httpClient.post(url, data)
  }
}
