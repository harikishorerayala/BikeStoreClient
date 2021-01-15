import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SiteFrameworkModule } from '../site-framework/site-framework.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, SiteFrameworkModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {
  constructor() {}
}
