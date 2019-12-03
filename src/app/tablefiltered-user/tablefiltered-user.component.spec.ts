import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablefilteredUserComponent } from './tablefiltered-user.component';

describe('TablefilteredUserComponent', () => {
  let component: TablefilteredUserComponent;
  let fixture: ComponentFixture<TablefilteredUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablefilteredUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablefilteredUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
