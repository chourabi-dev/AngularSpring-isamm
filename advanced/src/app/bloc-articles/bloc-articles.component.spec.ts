import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocArticlesComponent } from './bloc-articles.component';

describe('BlocArticlesComponent', () => {
  let component: BlocArticlesComponent;
  let fixture: ComponentFixture<BlocArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
