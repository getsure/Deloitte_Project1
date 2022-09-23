import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employees:any = []
  errMsg:any;
  constructor(private empService:EmployeeService) { 
    empService.getEmployees().subscribe(res =>this.employees = res,
                                        err => this.errMsg  = err
    )
  }

 

}
