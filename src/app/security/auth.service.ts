import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Credential } from './models/credential';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.url;

  constructor(private http: HttpClient,
    private router: Router) { }

  login(login: Login) {
    this.http.post<Credential>(this.URL + "/login", login).subscribe(it => {
      localStorage.setItem("token", it.token);
      localStorage.setItem("refresh_token", it.refreshToken);
      localStorage.setItem("user", it.user.name);
      localStorage.setItem("user_email", it.user.email);
      this.router.navigate(['/home']);
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != null ? true: false;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_email");
  }

}
