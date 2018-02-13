import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material.module';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        SharedRoutingModule,
        MaterialModule
    ],
    declarations: [
        NavComponent,
        PageNotFoundComponent,
        LoginComponent
    ],
    exports: [
        NavComponent,
        PageNotFoundComponent,
        LoginComponent
    ]
})

export class SharedModule { }
