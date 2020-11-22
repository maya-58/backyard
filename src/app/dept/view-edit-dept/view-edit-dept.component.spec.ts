import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditDeptComponent } from './view-edit-dept.component';

describe('ViewEditDeptComponent', () => {
  let component: ViewEditDeptComponent;
  let fixture: ComponentFixture<ViewEditDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEditDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
