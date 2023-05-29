import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css'],
})
export class ResetPasswordPageComponent implements OnInit {
  resetForm: FormGroup;
  success: string;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.resetForm = this.formBuilder.group(
      {
        newPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  onSubmit() {
    this.success =
      'Password changed successfully! You will be redirected to login page!';
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const newPassword = formGroup.get('newPassword').value;
    const confirmPassword = formGroup.get('confirmPassword').value;

    if (newPassword !== confirmPassword) {
      formGroup.get('confirmPassword').setErrors({ passwordMismatch: true });
    }
  }

  clearSuccess() {
    this.router.navigate(['login']);
  }
}
