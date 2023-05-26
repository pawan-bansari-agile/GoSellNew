import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordPageComponent } from './change-password-page/change-password-page.component';
import { EmailOtpPageComponent } from './email-otp-page/email-otp-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PhoneOtpPageComponent } from './phone-otp-page/phone-otp-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', component: InitialPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'phone-otp', component: PhoneOtpPageComponent },
  { path: 'email-otp', component: EmailOtpPageComponent },
  { path: 'change-password', component: ChangePasswordPageComponent },
  { path: 'forgot-password', component: ForgotPasswordPageComponent },
  { path: 'reset-password', component: ResetPasswordPageComponent },
  { path: 'home-page', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
