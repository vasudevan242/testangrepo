import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees');
  }

  createEmployee(postdata) {
    return this.http.post('http://dummy.restapiexample.com/api/v1/create' , postdata);
  }

  updateEmployee(id , postdata) {
    return this.http.put(`http://dummy.restapiexample.com/api/v1/update/${id}` , postdata);
  }

  deleteEmployee(id:Number) {
    return this.http.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`);
  }

  getEmployee(id:Number) {
    return this.http.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`);
  }

}
