import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtcielsPageComponent } from './artciels-page.component';

describe('ArtcielsPageComponent', () => {
  let component: ArtcielsPageComponent;
  let fixture: ComponentFixture<ArtcielsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtcielsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtcielsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
