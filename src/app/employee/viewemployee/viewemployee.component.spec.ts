import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewemployeeComponent } from './viewemployee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeserviceService } from 'src/app/service/employeeservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewemployeeComponent', () => {
  let component: ViewemployeeComponent;
  let fixture: ComponentFixture<ViewemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewemployeeComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule , RouterTestingModule],
      providers:[EmployeeserviceService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
