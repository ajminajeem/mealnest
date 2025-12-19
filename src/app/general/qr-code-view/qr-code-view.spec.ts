import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeView } from './qr-code-view';

describe('QrCodeView', () => {
  let component: QrCodeView;
  let fixture: ComponentFixture<QrCodeView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrCodeView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrCodeView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
