import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeColors } from './theme-colors';

describe('ThemeColors', () => {
  let component: ThemeColors;
  let fixture: ComponentFixture<ThemeColors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeColors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeColors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
