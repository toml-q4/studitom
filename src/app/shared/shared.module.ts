import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { PrimeUiModule } from '../prime.ui.module';
import { ZendeskDirective } from './directives/zendesk.directive';
import { JiraDirective } from './directives/jira.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PrimeUiModule,
        FormsModule
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
        JiraDirective,
        FormsModule
    ]
})

export class SharedModule { }
