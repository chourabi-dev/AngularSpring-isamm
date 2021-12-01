import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposComponent } from './depos.component';

describe('DeposComponent', () => {
  let component: DeposComponent;
  let fixture: ComponentFixture<DeposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
