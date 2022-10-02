import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from 'src/environments/environment';
import { Register } from '../models/register';
import { ToastMessageService } from '../services/toast-message.service';
import { Credential } from './models/credential';
import { Login } from './models/login';
import { RefreshToken } from './models/refresh-token';
import { User } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = environment.url;

  constructor(private http: HttpClient,
    private router: Router,
    private messageService: ToastMessageService) { }

  login(login: Login) {
    this.http.post<Credential>(this.URL + "/login", login).subscribe({
      next: it => {
        localStorage.setItem("token", it.token);
        localStorage.setItem("refresh_token", it.refreshToken);
        localStorage.setItem("user", it.user.name);
        localStorage.setItem("user_email", it.user.email);
        localStorage.setItem("photo", it.user.urlPhoto);
        localStorage.setItem("profile", it.user.profile);
        this.router.navigate(['']);
      },
      error: e => {
        this.messageService.addSingle("error", "Erro", "E-mail ou senha incorretos.");
      }
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
    localStorage.removeItem("photo");
    localStorage.removeItem("profile");
    window.location.reload();
  }

  register(register: Register) {
    this.http.post<User>(this.URL + "/auth/register", register).subscribe({
      next: it => {
        this.messageService.addSingle("success", "Sucesso", "Cadastro efetuado");
        this.router.navigate(['']);
      },
      error: e => {
        this.messageService.addSingle("error", "Erro", "Não foi possivel cadastrar sua conta, tente novamente respeitando o solicitado.");
      }
    })
  }

  refreshToken(refresh: RefreshToken) {
    this.http.post<RefreshToken>(this.URL + "/auth/refreshToken", refresh).subscribe(it => {
      localStorage.setItem("user_email", it.email);
      localStorage.setItem("token", it.token);
      localStorage.setItem("refresh_token", it.refreshToken);
    })
  }

  isValidAcesso() {
    const token = localStorage.getItem("token")!;
    const refreshToken = localStorage.getItem("refresh_token")!;
    const email = localStorage.getItem("user_email")!;
    if(!this.verifyExpireToken(token)) {
      return;
    }
    if (this.verifyExpireToken(refreshToken)) {
      this.logout();
      return;
    }
    const refresh: RefreshToken = {
      token: token,
      refreshToken: refreshToken,
      email:email
    }
    this.refreshToken(refresh);
    return;
  }

  verifyExpireToken(token: string) {
    const helper = new JwtHelperService(token);
    const decodedToken = helper.decodeToken(token);
    return decodedToken?.exp <= new Date().getTime() / 1000;
  }

  forgotPassword(email: string) {
    return this.http.post<string>(this.URL + '/auth/forgotPassword', email);
  }

  resetPassword(recover: Recover) {
    return this.http.post<string>(this.URL + '/auth/resetPassword', recover);
  }

}

interface Recover {
  email: string;
  password: string;
  token: string;
}
