import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLabels } from './print-labels';

describe('PrintLabels', () => {
  let component: PrintLabels;
  let fixture: ComponentFixture<PrintLabels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintLabels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintLabels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
