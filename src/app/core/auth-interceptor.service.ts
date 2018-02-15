import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) { }
  intercept(req, next) {
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.authService.token)
    });
    return next.handle(authRequest);
  }
}
