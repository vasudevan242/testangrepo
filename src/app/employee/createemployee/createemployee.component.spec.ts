import { async, inject , ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateemployeeComponent } from './createemployee.component';
import {EmployeeserviceService} from '../../service/employeeservice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CreateemployeeComponent', () => {
  let component: CreateemployeeComponent;
  let fixture: ComponentFixture<CreateemployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateemployeeComponent ],
      imports: [ReactiveFormsModule , HttpClientTestingModule],
      providers: [
        EmployeeserviceService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get all employees', inject([HttpTestingController, EmployeeserviceService],
  //   (httpMock: HttpTestingController, apiService: EmployeeserviceService) => {
  //     apiService.getEmployees().subscribe(data => {
  //       expect(data.data.length).toBe(15);
  //     });
  //   }
  // ));
});
