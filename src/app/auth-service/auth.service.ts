import { Injectable } from '@angular/core';

interface User {
  name: string;
  email: string;
  phone: number;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  users: User[] = [];

  signUp(form) {
    if (form.password !== form.confirmPassword) {
      console.error('Passwords dont match!');
    }
  }
}
