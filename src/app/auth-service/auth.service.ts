import { Injectable } from '@angular/core';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  users: User[] = [
    new User('pawan', 'pawan@email.com', 7798813105, 'pawan', true),
  ];

  userEmittor = new BehaviorSubject<User>(null);

  signUp(form) {
    const user = new User(
      form.name,
      form.email,
      form.phone,
      form.password,
      false
    );
    this.users.push(user);
    this.userEmittor.next(user);
  }

  signIn(form) {
    const user = this.users.filter(
      (user) => user.email === form.email && user.password === form.password
    );

    if (user.length > 0) {
      this.userEmittor.next(user[0]);
    }
  }

  updateUser(user) {
    const index = this.users.findIndex((item) => item.email === user.email);

    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...user };
    }
    this.userEmittor.next(this.users[index]);
  }
}
