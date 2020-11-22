import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {EmpComponent} from './emp/emp.component';
import {DeptComponent} from './dept/dept.component';

const routes: Routes = [
  {path: 'emp' , component: EmpComponent},
  {path : 'dept' , component: DeptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
