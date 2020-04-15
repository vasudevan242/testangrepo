import { Component, OnInit } from '@angular/core';

import {EmployeeserviceService} from '../../service/employeeservice.service';
import { FormGroup , FormsModule , ReactiveFormsModule , FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  employeeForm:FormGroup;
  message:string = "";
  buttonMsg:string = "Submit";

  formErrors = {
    name : {
      "required":"Please enter the name",
      "pattern" : "Please enter only the Alphabetic values"
    },
    salary : {
      "required": "Please enter the salary",
      "pattern" : "Please enter the valid Salary"
    },
    age : {
      "required": "Please enter the age",
      "pattern" : "Please enter valid the age"
    }
  }

  formError = {
    name : '',
    salary : '',
    age : ''
  }

  constructor(private employeeService : EmployeeserviceService,private fb:FormBuilder) { }

  ngOnInit() {

    this.employeeForm = this.fb.group({
      name  : ['' , [Validators.required , Validators.pattern(/^[a-zA-Z]+$/)]],
      salary: ['' , [Validators.required , Validators.pattern(/^[0-9]+$/)]],
      age   : ['',  [Validators.required,Validators.pattern(/^[0-9]*$/)]]
    });

    this.employeeForm.valueChanges.subscribe(data => {
        for(let key in this.formError ) {
          this.formError[key] = '';
        }
    });
  }

  onSubmit(employeeFrom) {
    
    this.buttonMsg = "Processing...";

    if(!employeeFrom.valid) {

      for(let key in employeeFrom.controls) {
        
        for (let formkey in this.employeeForm.controls[key].errors) {
          this.formError[key] = this.formErrors[key][formkey];
        }

      }

      this.buttonMsg = "Submit";
      return false;

    }

    this.employeeService.createEmployee(employeeFrom.value).subscribe(data => {
      this.message = "Created Successfully..!!";
      setTimeout(() => {
        this.message = "";
      },2000);

      this.resetFromValues(employeeFrom);

    },error => {
      this.resetFromValues(employeeFrom);
    });

  }

  resetFromValues(fromData) {
    this.buttonMsg = "Submit";
    for(let key in fromData.controls) {
      this.employeeForm.controls[key].setValue('');
    }
  }

}
