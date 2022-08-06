import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    return this.checkAccess(route, state);
  }

  async checkAccess(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Promise<boolean> {
    if (!this.authService.isLoggedIn()) {
      this.authService.isValidAcesso();
      this.router.navigate(['/login']);
    }
    return true;
  }

}
