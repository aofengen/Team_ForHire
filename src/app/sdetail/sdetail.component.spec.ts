import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdetailComponent } from './sdetail.component';

describe('SdetailComponent', () => {
  let component: SdetailComponent;
  let fixture: ComponentFixture<SdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
