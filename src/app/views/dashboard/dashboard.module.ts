import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from './bucket/bucket.component';
import { MaterialModule } from 'app/material.module';
import { WorkflowComponent } from 'app/views/dashboard/workflow/workflow.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { SharedModule } from '../../shared/shared.module';
import { PrimeUiModule } from '../../prime.ui.module';
import { BucketService } from '../shared/services/bucket.service';
import { WorkflowService } from '../shared/services/workflow.service';
import { ViewsSharedModule } from '../shared/views.shared.module';

@NgModule({
    imports: [
        SharedModule,
        ViewsSharedModule,
        DashboardRoutingModule,
        MaterialModule,
        PrimeUiModule
    ],
    declarations: [
        WorkflowComponent,
        BucketComponent,
        DashboardComponent,
        LoadingComponent
    ],
    exports: [
        WorkflowComponent,
        BucketComponent,
        DashboardComponent
    ],
    providers: []
})

export class DashboardModule { }
