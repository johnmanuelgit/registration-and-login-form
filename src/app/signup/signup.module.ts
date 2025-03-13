import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule,CommonModule,NgOptimizedImage,RouterModule,RouterLink,RouterOutlet,SignupComponent],
  providers: [],
  bootstrap: []
})
export class SignupModule { }
