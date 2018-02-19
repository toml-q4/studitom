import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthInterceptorService } from './auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
    imports: [ CommonModule ],
    providers: [ AuthService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true } ],
})

export class CoreModule { }
