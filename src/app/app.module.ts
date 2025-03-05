import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [LoginComponent,SignupComponent], 
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule,NgModule,RouterLink
  ],
  providers: [],
  bootstrap: [LoginComponent] 
})
export class AppModule {}
