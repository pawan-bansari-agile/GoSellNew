import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth-service/auth.service';
import { User } from '../auth-service/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  error: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.authService.userEmittor.subscribe((user) => {
      this.user = user;
    });
  }

  signIn() {
    this.authService.signIn(this.loginForm.value);
    this.loginForm.reset();
    if (this.user) {
      this.router.navigate(['..', 'home-page']);
    } else {
      this.error = 'Invalid email or password';
    }
  }
}
