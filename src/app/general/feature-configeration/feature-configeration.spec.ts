import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureConfigeration } from './feature-configeration';

describe('FeatureConfigeration', () => {
  let component: FeatureConfigeration;
  let fixture: ComponentFixture<FeatureConfigeration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureConfigeration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureConfigeration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
