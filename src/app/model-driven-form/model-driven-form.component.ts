import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent  {
  constructor(private formBuilder:FormBuilder){}
  userForm = this.formBuilder.group({
    userName:['', [Validators.required]],
    email:['', [Validators.required]],
    address:this.formBuilder.group({
      city:['', [Validators.required]]
    })
  })

  submitData(){
    console.log(this.userForm.value)
  }
}
