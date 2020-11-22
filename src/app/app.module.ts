import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDeptComponent } from './dept/add-dept/add-dept.component';
import { ViewEditDeptComponent } from './dept/view-edit-dept/view-edit-dept.component';
import { ViewEditEmpComponent } from './emp/view-edit-emp/view-edit-emp.component';
import { AddEmpComponent } from './emp/add-emp/add-emp.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeptComponent } from './dept/dept.component';
import { EmpComponent } from './emp/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDeptComponent,
    ViewEditDeptComponent,
    ViewEditEmpComponent,
    AddEmpComponent,
    DeptComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
