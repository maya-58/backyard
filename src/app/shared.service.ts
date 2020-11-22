import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIURL = 'http://localhost:5000/api';
  readonly PhotoURL = '';

  constructor(private Http: HttpClient) { }

  // Dept API Call
  getdeptList(): Observable<any[]>{
    console.log(this.APIURL + '/dept');
    return this.Http.get<any>(this.APIURL + '/dept');

  }

  addDept (val: any) {
    return this.Http.post(this.APIURL + '/dept', val);
  }

  updateDept (val: any) {
    return this.Http.put(this.APIURL + '/dept', val);
  }

  deleteDept (val: any) {
    return this.Http.delete(this.APIURL + '/dept/' + val);
  }

  //Emp API call
  getempList(): Observable<any[]>{
    return this.Http.get<any>(this.APIURL + '/emp');

  }

  addEmp (val: any) {
    return this.Http.post(this.APIURL + '/emp', val);
  }

  updateEmp (val: any) {
    return this.Http.put(this.APIURL + '/emp', val);
  }

  deleteEmp (val: any) {
    return this.Http.delete(this.APIURL + '/emp/' + val);
  }

  getAlldeptnames(): Observable<any[]>{
    return this.Http.get<any>(this.APIURL + '/emp');

  }

}
