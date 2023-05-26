import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      confirmPassword.setErrors({ passwordMismatch: true });
    }

    if (
      password &&
      password.value &&
      confirmPassword &&
      confirmPassword.value
    ) {
      return password.value === confirmPassword.value
        ? null
        : { passwordMismatch: true };
    }

    return null;
  };

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
    this.signUpForm = this.fb.group(
      {
        name: ['', [Validators.required, this.noConsecutiveSpacesValidator]],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6-9]\d{9}$/
            ),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  signUp() {
    this.authService.signUp(this.signUpForm.value);
    this.signUpForm.reset();
    this.router.navigate(['..', 'phone-otp']);
  }
}
