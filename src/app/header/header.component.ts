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
  selectedLanguage: string = 'En';
  isDarkMode: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userEmittor.subscribe((user) => {
      this.user = user;
    });
  }

  changeLanguage(languageCode: string) {
    this.selectedLanguage = languageCode;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
}
