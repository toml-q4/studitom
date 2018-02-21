import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketService } from './services/bucket.service';
import { WorkflowService } from './services/workflow.service';
import { SharedModule } from '../../shared/shared.module';
import { GroupService } from './services/group.service';
import { WorkflowsComponent } from './workflows/workflows.component';
import { PrimeUiModule } from '../../prime.ui.module';

@NgModule({
    imports: [
      SharedModule,
      PrimeUiModule
    ],
    declarations: [
      WorkflowsComponent
    ],
    providers: [
      BucketService, WorkflowService, GroupService
    ],
    exports: [
      WorkflowsComponent
    ]
})

export class ViewsSharedModule { }
