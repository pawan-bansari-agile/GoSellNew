import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../auth-service/user.model';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-page',
  templateUrl: './change-password-page.component.html',
  styleUrls: ['./change-password-page.component.css'],
})
export class ChangePasswordPageComponent implements OnInit {
  changePasswordForm: FormGroup;
  user: User;
  error: string;
  success: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
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
    });
    this.authService.userEmittor.subscribe((user) => {
      this.user = user;
    });
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const oldPassword = this.changePasswordForm.value.oldPassword;
      const newPassword = this.changePasswordForm.value.newPassword;
      const confirmPassword = this.changePasswordForm.value.confirmPassword;

      if (this.user.password !== oldPassword) {
        this.error = "Old password don't match!";
      } else if (newPassword !== confirmPassword) {
        this.error = "The entered new passwords don't match!";
      } else {
        const existingUser = { ...this.user };
        existingUser.password = newPassword;
        this.authService.updateUser(existingUser);

        this.success = 'Password changed successfully!';
      }
    }
  }

  clearError() {
    this.error = '';
  }

  clearSuccess() {
    this.success = '';
    this.router.navigate(['home-page']);
  }
}
