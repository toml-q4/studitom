import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Bucket } from '../../shared/domains/bucket';
import { Workflow } from '../../shared/domains/workflow';
import { WorkflowService } from '../../shared/services/workflow.service';
import { Group } from '../../shared/domains/group';
import { GroupService } from '../../shared/services/group.service';
import { BucketModel } from './bucket.model';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'q4-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit, OnChanges {
  @Input() bucket: BucketModel;
  workflows: Workflow[];
  workflowsLoaded = false;
  expanded = true;
  groups: Group[];
  items: MenuItem[];

  constructor(private workflowService: WorkflowService, private groupService: GroupService) {
  }

  ngOnInit() {
    this.items = [
      { label: 'Submit All' },
      { label: 'Publish All' },
      { label: 'Archive' }
    ];
  }

  ngOnChanges() {
    if (this.expanded) {
      this.loadWorkflows();
    }
  }

  trackByGroupId(index, group) {
    return group ? group.id : undefined;
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
    if (this.bucket === undefined) { return; }

    this.workflowService.getByBucketId(this.bucket.id).subscribe(workflows => {
      this.workflows = workflows;
      this.workflowsLoaded = true;

      this.groupService.getByBucketId(this.bucket.id).subscribe(groups => {
        const ungrouped = new Group();
        ungrouped.id = this.bucket.id * groups.length * workflows.length; // unique (not 100% but good enough)
        ungrouped.ungrouped = true;
        if (groups.length > 0) {
          this.workflows.forEach(workflow => {
            let matched = false;
            groups.forEach(group => {
              if (group.workflowIds.indexOf(workflow.id) > 0) {
                if (group.workflows === undefined) { group.workflows = new Array<Workflow>(); }
                group.workflows.push(Object.assign(workflow, {}));
                matched = true;
              }
            });
            if (!matched) {
              ungrouped.workflows.push(Object.assign(workflow, {}));
            }
          });
        } else {
          this.workflows.forEach(workflow => {
            ungrouped.workflows.push(Object.assign(workflow, {}));
          });
        }

        if (ungrouped.workflows.length > 0) { groups.push(ungrouped); }

        this.groups = groups;
      });
    });
  }
}
