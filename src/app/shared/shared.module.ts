import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { PrimeUiModule } from '../prime.ui.module';

@NgModule({
    imports: [
        CommonModule,
        PrimeUiModule
    ],
    declarations: [
        NavComponent,
        LoginComponent
    ],
    exports: [
        CommonModule,
        NavComponent,
        LoginComponent
    ]
})

export class SharedModule { }
