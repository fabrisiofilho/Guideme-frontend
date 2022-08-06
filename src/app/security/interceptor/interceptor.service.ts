import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest}
from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {

  }

 intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = request.clone({ headers: request.headers.append('X-Authorization', `${localStorage.getItem("token")}`) });
    this.authService.isValidAcesso();
    return next.handle(clonedRequest);
  }

}
