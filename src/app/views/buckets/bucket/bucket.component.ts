import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Bucket } from '../../shared/domains/bucket';
import { Workflow } from '../../shared/domains/workflow';
import { WorkflowService } from '../../shared/services/workflow.service';

@Component({
  selector: 'q4-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit, OnChanges {

  @Input() bucket: Bucket;
  workflows: Workflow[];
  workflowsLoaded = false;
  expanded = false;

  constructor(private workflowService: WorkflowService) {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.expanded = !this.bucket.archived;
    if (this.expanded) {
      this.loadWorkflows();
    }
  }

  trackWorkflow(index, workflow) {
    return workflow ? workflow.id : undefined;
  }

  expand() {
    this.expanded = !this.expanded;

    if (!this.workflowsLoaded) {
      this.loadWorkflows();
    }
  }

  refresh() {
    this.loadWorkflows();
  }

  private loadWorkflows() {
    this.workflowService.getByBucketId(this.bucket.id).subscribe(workflows => {
      this.workflows = workflows;
      this.workflowsLoaded = true;
    });
  }

}
