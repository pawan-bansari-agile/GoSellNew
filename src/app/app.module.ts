import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PhoneOtpPageComponent } from './phone-otp-page/phone-otp-page.component';
import { EmailOtpPageComponent } from './email-otp-page/email-otp-page.component';
import { ChangePasswordPageComponent } from './change-password-page/change-password-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './directives/dropdown.directive';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    SignUpPageComponent,
    LoginPageComponent,
    PhoneOtpPageComponent,
    EmailOtpPageComponent,
    ChangePasswordPageComponent,
    ForgotPasswordPageComponent,
    ResetPasswordPageComponent,
    HeaderComponent,
    DropDownDirective,
    HomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
