import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhistoryDetailComponent } from './adminhistory-detail.component';

describe('AdminhistoryDetailComponent', () => {
  let component: AdminhistoryDetailComponent;
  let fixture: ComponentFixture<AdminhistoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhistoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
