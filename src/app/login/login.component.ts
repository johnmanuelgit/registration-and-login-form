import { Component } from '@angular/core';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import { Router, RouterLink,} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router ) {}
  onSubmit(contactForm:NgForm) {
    console.log(contactForm.value); 
    localStorage.setItem('token', 'user-token');
    this.router.navigate(['/home']);}
}
