import { Component, OnInit, Input } from '@angular/core';
import { BucketModel } from 'app/views/dashboard/bucket/bucket.model';
import { Bucket } from './bucket';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Workflow } from '../workflow/workflow';
import { WorkflowService } from '../shared/workflow.service';

@Component({
  selector: 'q4-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit {
  @Input() bucket: Bucket;
  workflows: Workflow[];
  workflowsLoaded = false;
  expanded = false;

  constructor(private workflowService: WorkflowService) {
  }

  ngOnInit() {
  }

  trackWorkflow(index, workflow) {
    return workflow ? workflow.id : undefined;
  }

  expand() {
    this.expanded = !this.expanded;

    if (!this.workflowsLoaded) {
      this.workflowService.getByBucketId(this.bucket.id).subscribe(workflows => {
        this.workflows = workflows;
        this.workflowsLoaded = true;
      });
    }
  }
}
