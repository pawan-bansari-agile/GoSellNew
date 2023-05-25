import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneOtpPageComponent } from './phone-otp-page.component';

describe('PhoneOtpPageComponent', () => {
  let component: PhoneOtpPageComponent;
  let fixture: ComponentFixture<PhoneOtpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneOtpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneOtpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
