import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css'],
})
export class SignUpPageComponent implements OnInit {
  signUpForm: FormGroup;

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
      return { passwordMismatch: true };
    }

    return null;
  };

  // Custom validator to disallow consecutive spaces
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
    // this.signUpForm = this.fb.group({
    //   name: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(3),
    //       this.noConsecutiveSpacesValidator,
    //     ],
    //   ],
    //   phone: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   password: ['', Validators.required],
    //   confirmPassword: ['', Validators.required],
    // });
    this.signUpForm = this.fb.group(
      {
        name: ['', [Validators.required, this.noConsecutiveSpacesValidator]],
        phone: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  signUp() {
    console.log(this.signUpForm.value);

    this.authService.signUp(this.signUpForm.value);
  }
}
