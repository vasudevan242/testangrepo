import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule , Routes} from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


import { AppComponent } from './app.component';
import { ListemployeeComponent } from './employee/listemployee/listemployee.component';
import { CreateemployeeComponent } from './employee/createemployee/createemployee.component';
import { ViewemployeeComponent } from './employee/viewemployee/viewemployee.component';
import { NotfoundComponent } from './employee/notfound/notfound.component';
import { HeaderComponent } from './employee/header/header.component';

const routes:Routes = [
  {
    path :'',
    component:ListemployeeComponent
  },
  {
    path:'create',
    component:CreateemployeeComponent
  },
  {
    path:"view/:id",
    component:ViewemployeeComponent
  },
  {
    path:"**",
    component:NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListemployeeComponent,
    CreateemployeeComponent,
    ViewemployeeComponent,
    NotfoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
