import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdateComponent } from './supdate.component';

describe('SupdateComponent', () => {
  let component: SupdateComponent;
  let fixture: ComponentFixture<SupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
