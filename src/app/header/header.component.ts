import { Component, OnInit } from '@angular/core';
import { User } from '../auth-service/user.model';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userEmittor.subscribe((user) => {
      this.user = user;
    });
  }
}
