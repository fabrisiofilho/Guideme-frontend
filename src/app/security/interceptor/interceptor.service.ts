import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest }
from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {

 intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
  const clonedRequest = request.clone({ headers: request.headers.append('X-Authorization', `${localStorage.getItem("token")}`) });
    return next.handle(clonedRequest);
  }
}
