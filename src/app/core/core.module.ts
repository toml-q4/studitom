import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthInterceptorService } from './auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SsoComponent } from './sso/sso.component';
import { PrimeUiModule } from '../prime.ui.module';
import { NavigationService } from './navigation.service';

@NgModule({
    imports: [ CommonModule, PrimeUiModule ],
    declarations: [SsoComponent],
    providers: [ AuthService, NavigationService, AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true } ],
    exports: [SsoComponent]
})

export class CoreModule { }
