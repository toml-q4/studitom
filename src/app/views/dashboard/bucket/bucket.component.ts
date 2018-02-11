import { Component, OnInit, Input } from '@angular/core';
import { BucketModel } from 'app/views/dashboard/bucket/bucket.model';
import { Bucket } from './bucket';
import { Observable } from 'rxjs/Observable';
import { Workflow } from '../workflow/workflow';
import { WorkflowService } from '../shared/workflow.service';

@Component({
  selector: 'q4-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  @Input() bucket: Bucket;
  workflows$: Observable<Workflow[]>;
  constructor(private workflowService: WorkflowService) {
  }

  ngOnInit() {
    this.workflows$ = this.workflowService.getByBucketId(this.bucket.id);
    //this.workflows$.subscribe();
  }

  submit() {}
}
