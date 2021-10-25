import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFavouritsComponent } from './my-favourits.component';

describe('MyFavouritsComponent', () => {
  let component: MyFavouritsComponent;
  let fixture: ComponentFixture<MyFavouritsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFavouritsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFavouritsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
