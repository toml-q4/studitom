import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from './bucket/bucket.component';
import { MaterialModule } from 'app/material.module';
import { WorkflowComponent } from 'app/views/dashboard/workflow/workflow.component';
import { BucketService } from './shared/bucket.service';
import { WorkflowService } from './shared/workflow.service';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialModule
    ],
    declarations: [
        WorkflowComponent,
        BucketComponent,
        DashboardComponent
    ],
    exports: [
        WorkflowComponent,
        BucketComponent,
        DashboardComponent
    ],
    providers: [BucketService, WorkflowService]
})

export class DashboardModule { }
