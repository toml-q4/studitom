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
  workflowIds$: Observable<string[]>;
  constructor(private workflowService: WorkflowService) {
  }

  ngOnInit() {
    this.workflowIds$ = this.workflowService.getByBucketId(this.bucket.id).map(workflows => workflows.map(function(w){ return w.id; }));
  }

  trackWorkflow(index, workflow) {
    return workflow ? workflow.id : undefined;
  }

  submit() {}
}
