import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent], 
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule,NgModule,RouterLink,RouterOutlet
  ],
  providers: [],
  bootstrap: [LoginComponent] 
})
export class LoginModule {}
