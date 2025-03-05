import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SignupComponent } from './signup.component';



@NgModule({
  declarations: [SignupComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule,CommonModule,NgOptimizedImage],
  providers: [],
  bootstrap: []
})
export class SignupModule { }
