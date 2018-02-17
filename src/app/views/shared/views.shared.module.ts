import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucketService } from './services/bucket.service';
import { WorkflowService } from './services/workflow.service';
import { SharedModule } from '../../shared/shared.module';
import { GroupService } from './services/group.service';

@NgModule({
    imports: [
      SharedModule
    ],
    providers: [
      BucketService, WorkflowService, GroupService
    ],
    exports: [
    ]
})

export class ViewsSharedModule { }
