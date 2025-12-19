import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siteconfigeration } from './siteconfigeration';

describe('Siteconfigeration', () => {
  let component: Siteconfigeration;
  let fixture: ComponentFixture<Siteconfigeration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Siteconfigeration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siteconfigeration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
