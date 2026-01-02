import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeColor } from './theme-color';

describe('ThemeColor', () => {
  let component: ThemeColor;
  let fixture: ComponentFixture<ThemeColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
