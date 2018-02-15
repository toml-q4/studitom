import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Workflow } from '../../shared/domains/workflow';
import { WorkflowService } from '../../shared/services/workflow.service';

@Component({
  selector: 'q4-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit, OnChanges {
  @Input() workflow: Workflow;
  iconWorkflowType: string;
  statusMessage: string;

  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setIconWorkflowType();
    this.setStatusMessage();
  }
  private setStatusMessage() {
    switch (this.workflow.status) {
      case 'ForApproval':
        this.statusMessage = 'For Approval';
        break;
      case 'Submitted':
        this.statusMessage = 'Submitted';
        break;
      case 'Live':
        this.statusMessage = 'Live';
        break;
      case 'LivePending':
        this.statusMessage = 'Live - Pending';
        break;
      default:
        this.statusMessage = 'Unknown';
    }
  }
  private setIconWorkflowType() {
    switch (this.workflow.type) {
      case 'Event':
        this.iconWorkflowType = 'event';
        break;
      case 'Presentation':
        this.iconWorkflowType = 'perm_media';
        break;
      case 'PressRelease':
        this.iconWorkflowType = 'description';
        break;
      default:
        this.iconWorkflowType = 'error';
    }
  }
}
