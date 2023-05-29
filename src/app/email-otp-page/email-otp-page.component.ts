import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { User } from '../auth-service/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-email-otp-page',
  templateUrl: './email-otp-page.component.html',
  styleUrls: ['./email-otp-page.component.css'],
})
export class EmailOtpPageComponent implements OnInit {
  otpForm: FormGroup;
  timeRemaining: number = 60;
  resendLinkVisible: boolean = false;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
    this.startTimer();
    this.authService.userEmittor.subscribe((user) => {
      this.user = user;
    });
  }

  noConsecutiveSpacesValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const value = control.value;

    if (/\s{2,}/.test(value)) {
      return { consecutiveSpaces: true };
    }

    return null;
  };

  buildForm() {
    this.otpForm = this.formBuilder.group({
      otp: ['', [Validators.required, this.noConsecutiveSpacesValidator]],
    });
  }

  submitForm() {
    const verifiedUser = { ...this.user };
    verifiedUser.verified = true;
    this.authService.userEmittor.next(verifiedUser);
    this.authService.updateUser(verifiedUser);
    this.router.navigate(['..', 'home-page']);
  }

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
