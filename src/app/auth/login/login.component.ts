import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/auth/login.service';

@Component({
  selector: 'app-login',
  imports: [NavbarComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  
  constructor(private router:Router, private loginService: LoginService) { }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('GearBox', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('1q2w3e4r', [Validators.required, Validators.minLength(4)])
  });

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  login() {
    if(this.loginForm.valid) {
      this.loginService.login(this.loginForm.value);
      this.router.navigate(['/home']);
      this.loginForm.reset();
    }else {
      alert("Invalid form");
      this.loginForm.markAllAsTouched();
    }
  }

}
