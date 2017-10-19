import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdateItemComponent } from './supdate-item.component';

describe('SupdateItemComponent', () => {
  let component: SupdateItemComponent;
  let fixture: ComponentFixture<SupdateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupdateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
