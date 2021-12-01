import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurshaseComponent } from './purshase.component';

describe('PurshaseComponent', () => {
  let component: PurshaseComponent;
  let fixture: ComponentFixture<PurshaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurshaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurshaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
