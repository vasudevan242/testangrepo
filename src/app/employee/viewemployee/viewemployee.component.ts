import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  employeeForm:FormGroup;
  message:string = "";
  buttonMsg:string = "Update";
  employeeId:Number = 0;
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
  constructor(private employeeService : EmployeeserviceService,private fb:FormBuilder , private route:ActivatedRoute) { }

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

    this.employeeId = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.employeeId).subscribe((data) => {

    }, error => {
      console.log(error);
      alert("Unable to fetch record");
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

    this.employeeService.updateEmployee(this.employeeId , employeeFrom.value).subscribe(data => {
      this.message = "Updated Successfully..!!";
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
