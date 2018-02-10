import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SharedRoutingModule } from './shared-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        SharedRoutingModule,
        MaterialModule
    ],
    declarations: [
        NavComponent,
        PageNotFoundComponent
    ],
    exports: [
        NavComponent,
        PageNotFoundComponent
    ]
})

export class SharedModule { }
