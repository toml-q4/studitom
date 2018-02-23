import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  TOKEN_KEY = 'token';
  redirectUrl: string;

  constructor() { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  set token(value: string) {
    localStorage.setItem(this.TOKEN_KEY, value);
  }

  get isLoggedIn() {
    return this.token !== ''; // simplified
  }

  // login(): Observable<boolean> {
  //   return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  // }

  logout(): void {
    this.token = '';
  }
}
