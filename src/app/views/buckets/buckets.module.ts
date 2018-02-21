import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketComponent } from './bucket/bucket.component';
import { SharedModule } from '../../shared/shared.module';
import { PrimeUiModule } from '../../prime.ui.module';
import { ViewsSharedModule } from '../shared/views.shared.module';
import { BucketsRoutingModule } from './buckets-routing.module';
import { BucketsComponent } from './buckets.component';
import { GroupComponent } from './group/group.component';
import { WorkflowsComponent } from '../shared/workflows/workflows.component';

@NgModule({
    imports: [
        SharedModule,
        ViewsSharedModule,
        BucketsRoutingModule,
        PrimeUiModule
    ],
    declarations: [
        BucketComponent,
        BucketsComponent,
        GroupComponent
    ],
    exports: [
        BucketComponent,
        BucketsComponent,
        GroupComponent
    ],
    providers: []
})

export class BucketsModule { }
