import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardAluno implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    return this.checkAccess(route, state);
  }

  async checkAccess(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): Promise<boolean> {
    if (localStorage.getItem("profile") !== "ALUNO") {
      this.router.navigate(['roadmap/admin']);
    }
    return true;
  }

}
