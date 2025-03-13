import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { routes } from './app.routes';

@NgModule({
  declarations: [LoginComponent,SignupComponent], 
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule,NgModule,RouterLink,AuthGuard,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [LoginComponent] ,
  exports: [RouterModule]
})
export class AppModule {}
