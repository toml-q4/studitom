import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const url = state.url;
      return true;
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);

    return false;
  }
}
