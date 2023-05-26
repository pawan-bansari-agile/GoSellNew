import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { User } from '../auth-service/user.model';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-otp-page',
  templateUrl: './phone-otp-page.component.html',
  styleUrls: ['./phone-otp-page.component.css'],
})
export class PhoneOtpPageComponent implements OnInit {
  otpForm: FormGroup;
  timeRemaining: number = 60;
  resendLinkVisible: boolean = false;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  noConsecutiveSpacesValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const value = control.value;

    if (/\s{2,}/.test(value)) {
      return { consecutiveSpaces: true };
    }

    return null;
  };

  ngOnInit(): void {
    this.buildForm();
    this.startTimer();
    this.authService.userEmittor.subscribe((user) => {
      this.user = user;
    });
  }

  buildForm() {
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, this.noConsecutiveSpacesValidator]],
    });
  }

  submitForm() {
    this.router.navigate(['..', 'email-otp']);
  }

  resendOTP() {}

  startTimer() {
    const timer = setInterval(() => {
      this.timeRemaining--;

      if (this.timeRemaining <= 0) {
        clearInterval(timer);
        this.resendLinkVisible = true;
      }
    }, 1000);
  }
}
