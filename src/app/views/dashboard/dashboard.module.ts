import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BucketComponent } from './bucket/bucket.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    declarations: [
        BucketComponent,
        DashboardComponent
    ],
    exports: [
        BucketComponent,
        DashboardComponent
    ]
})

export class DashboardModule { }