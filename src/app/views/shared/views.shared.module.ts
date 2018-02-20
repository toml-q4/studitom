import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketService } from './services/bucket.service';
import { WorkflowService } from './services/workflow.service';
import { SharedModule } from '../../shared/shared.module';
import { GroupService } from './services/group.service';
import { WorkflowsComponent } from './workflows/workflows.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { WorkflowsHeaderComponent } from './workflows-header/workflows-header.component';

@NgModule({
    imports: [
      SharedModule
    ],
    declarations: [
      WorkflowComponent,
      WorkflowsComponent,
      WorkflowsHeaderComponent
    ],
    providers: [
      BucketService, WorkflowService, GroupService
    ],
    exports: [
      WorkflowsComponent
    ]
})

export class ViewsSharedModule { }
