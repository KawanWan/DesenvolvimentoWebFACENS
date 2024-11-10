import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: string = 'admin';
  password: string = '123';
  invalidCredentials: boolean = false;

  constructor(private router: Router) {}

  onSubmit(myForm: NgForm) {
    const inputUser = myForm.value.inputUser;
    const inputPassword = myForm.value.inputPassword;

    if (inputUser === this.user && inputPassword === this.password) {
      this.router.navigate(['/home', inputUser]);
    } else {
      this.invalidCredentials = true;
    }
  }
}
