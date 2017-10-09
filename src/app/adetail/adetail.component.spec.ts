import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdetailComponent } from './adetail.component';

describe('AdetailComponent', () => {
  let component: AdetailComponent;
  let fixture: ComponentFixture<AdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
