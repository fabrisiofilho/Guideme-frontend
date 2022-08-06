import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/security/auth.service';
import { Login } from 'src/app/security/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    formBuilder: FormBuilder) {
      this.loginForm = formBuilder.group({
        email: [null, [Validators.required]],
        password: [null, [Validators.required]],
      });
    }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      const login: Login = this.loginForm.getRawValue();
      this.authService.login(login);
    }
  }

  register() {
    this.router.navigate(['/cadastrar']);
  }

}
