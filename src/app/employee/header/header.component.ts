import { Component, OnInit } from '@angular/core';
import {EmployeeserviceService} from '../../service/employeeservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private searchval:Number;

  constructor(private employee:EmployeeserviceService , private router:Router) { }

  ngOnInit() {

  }

  search() {
    console.log(this.searchval);
    this.employee.getEmployee(this.searchval).subscribe(data => {
      //this.router.navigate['/view'+this.searchval];
    },error => {
      console.log(error);
      //this.router.navigate('/view/'+this.searchval);
      this.router.navigate(['view' , this.searchval]);
    });

  }

}
