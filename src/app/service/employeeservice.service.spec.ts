import { TestBed } from '@angular/core/testing';

import { EmployeeserviceService } from './employeeservice.service';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EmployeeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ],
    providers: [
      EmployeeserviceService,
    ],
  }));

  it('should be created', () => {
    const service: EmployeeserviceService = TestBed.get(EmployeeserviceService);
    expect(service).toBeTruthy();
  });

  it("shoe have create employee method" , () => {
    const service: EmployeeserviceService = TestBed.get(EmployeeserviceService);
    expect(service.createEmployee).toBeTruthy();
  });

});
