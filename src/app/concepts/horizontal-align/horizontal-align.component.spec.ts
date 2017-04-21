import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalAlignComponent } from './horizontal-align.component';

describe('HorizontalAlignComponent', () => {
  let component: HorizontalAlignComponent;
  let fixture: ComponentFixture<HorizontalAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
