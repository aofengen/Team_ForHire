import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhistoryItemComponent } from './adminhistory-item.component';

describe('AdminhistoryItemComponent', () => {
  let component: AdminhistoryItemComponent;
  let fixture: ComponentFixture<AdminhistoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhistoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhistoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
