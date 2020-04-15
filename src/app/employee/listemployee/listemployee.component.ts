import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../../service/employeeservice.service';

import { Employee } from '../../employee';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  private employees:Employee[];

  constructor(private employeeService:EmployeeserviceService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe((response:any)=> {
      this.employees = response.data;
    },error => {

    }); 
  }

  deleteEmployee(id) {

    this.employeeService.deleteEmployee(id).subscribe((response)=> {
      
      this.employees = this.employees.filter(function(data) {
        return data.id != id ? data : null;
      });        
      
      alert("Deleted Successfully");

    },error => {
      alert("Error in deleting");
    });

  }

}
