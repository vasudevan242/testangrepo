import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get(environment.apiUrl+'employees');
  }

  createEmployee(postdata) {
    return this.http.post(environment.apiUrl+'create' , postdata);
  }

  updateEmployee(id , postdata) {
    return this.http.put(`${environment.apiUrl}update/${id}` , postdata);
  }

  deleteEmployee(id:Number) {
    return this.http.delete(`${environment.apiUrl}delete/${id}`);
  }

  getEmployee(id:Number) {
    return this.http.get(`${environment.apiUrl}employee/${id}`);
  }

}
