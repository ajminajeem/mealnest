import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCounter } from './print-counter';

describe('PrintCounter', () => {
  let component: PrintCounter;
  let fixture: ComponentFixture<PrintCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintCounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
