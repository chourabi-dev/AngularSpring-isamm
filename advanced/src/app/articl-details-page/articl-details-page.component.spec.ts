import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlDetailsPageComponent } from './articl-details-page.component';

describe('ArticlDetailsPageComponent', () => {
  let component: ArticlDetailsPageComponent;
  let fixture: ComponentFixture<ArticlDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
