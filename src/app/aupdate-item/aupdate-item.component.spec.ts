import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AupdateItemComponent } from './aupdate-item.component';

describe('AupdateItemComponent', () => {
  let component: AupdateItemComponent;
  let fixture: ComponentFixture<AupdateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AupdateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AupdateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
