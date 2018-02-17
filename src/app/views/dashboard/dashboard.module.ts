import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrimeUiModule } from '../../prime.ui.module';
import { ViewsSharedModule } from '../shared/views.shared.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        SharedModule,
        ViewsSharedModule,
        DashboardRoutingModule,
        PrimeUiModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ],
    providers: []
})

export class DashboardModule { }
