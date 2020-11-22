import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditEmpComponent } from './view-edit-emp.component';

describe('ViewEditEmpComponent', () => {
  let component: ViewEditEmpComponent;
  let fixture: ComponentFixture<ViewEditEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEditEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
