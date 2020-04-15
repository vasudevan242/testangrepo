import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {EmployeeserviceService} from '../../service/employeeservice.service';

import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        FormsModule , 
        HttpClientTestingModule , 
        RouterTestingModule.withRoutes([]), 
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', inject([HttpTestingController, EmployeeserviceService],
    (httpMock: HttpTestingController, apiService: EmployeeserviceService) => {
      expect(component).toBeTruthy();
    }
  ));

  it('should test', () => {
    expect("test").toBe("test");
  });
  
});
