import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ListemployeeComponent } from './listemployee.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';

describe('ListemployeeComponent', () => {
  let component: ListemployeeComponent;
  let fixture: ComponentFixture<ListemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemployeeComponent ],
      imports: [RouterTestingModule,HttpClientTestingModule , NgxPaginationModule],
      providers :[EmployeeserviceService],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
