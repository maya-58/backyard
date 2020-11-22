import { Component, OnInit } from '@angular/core';
import {SharedService} from '../../shared.service';

@Component({
  selector: 'app-view-edit-dept',
  templateUrl: './view-edit-dept.component.html',
  styleUrls: ['./view-edit-dept.component.css']
})
export class ViewEditDeptComponent implements OnInit {

  constructor(private service: SharedService) { }

  DepartmentList: any = [];

  ngOnInit(): void {
    this.refreshDeptList();
  }

  refreshDeptList(){
    this.service.getdeptList().subscribe( data => {
      this.DepartmentList = data;
    });

  }

}
