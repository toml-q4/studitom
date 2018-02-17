import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { PrimeUiModule } from '../prime.ui.module';
import { ZendeskDirective } from './directives/zendesk.directive';
import { JiraDirective } from './directives/jira.directive';

@NgModule({
    imports: [
        CommonModule,
        PrimeUiModule
    ],
    declarations: [
        NavComponent,
        LoginComponent,
        ZendeskDirective,
        JiraDirective
    ],
    exports: [
        CommonModule,
        NavComponent,
        LoginComponent,
        ZendeskDirective,
        JiraDirective
    ]
})

export class SharedModule { }
