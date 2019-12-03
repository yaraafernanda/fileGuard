import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablefilteredComponent } from './tablefiltered.component';

describe('TablefilteredComponent', () => {
  let component: TablefilteredComponent;
  let fixture: ComponentFixture<TablefilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablefilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablefilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
