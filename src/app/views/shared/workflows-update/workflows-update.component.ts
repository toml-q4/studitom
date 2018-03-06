import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Workflow } from '../domains/workflow';
import { UpdateReport } from '../domains/update-report';
import { WorkflowService } from '../services/workflow.service';
import { AuthService } from '../../../core/auth.service';
import { WorkflowAction } from '../enums/workflow-action.enum';
import { WorkflowStatus } from '../enums/workflow-status.enum';
import { WorkflowUpdateRequest } from '../domains/workflow-update-request';
import { ApiResult } from '../../../shared/domains/api-result';

@Component({
  selector: 'q4-workflows-update',
  templateUrl: './workflows-update.component.html',
  styleUrls: ['./workflows-update.component.scss']
})
export class WorkflowsUpdateComponent implements OnChanges {
  @Input() workflows: Workflow[];
  @Input() workflowAction: WorkflowAction;
  @Output() completed = new EventEmitter<UpdateReport>();
  @Output() errored = new EventEmitter<string>();
  @Output() canceled = new EventEmitter();
  actionLabel: string;
  comment: string;
  skippedWorkflows = new Array<Workflow>();
  updatedWorkflows = new Array<Workflow>();

  constructor(private workflowService: WorkflowService, private authService: AuthService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.workflows !== undefined && changes.workflows !== null) {
      const updatedWorkflows = new Array<Workflow>();
      const skippedWorkflows = new Array<Workflow>();
      if (changes.workflows.currentValue !== undefined) {
        if (this.workflowAction === WorkflowAction.Submit) {
          changes.workflows.currentValue.forEach(workflow => {
            if (workflow.statusId === WorkflowStatus.InProgress) {
              updatedWorkflows.push(workflow);
            } else {
              skippedWorkflows.push(workflow);
            }
          });
        } else {
          changes.workflows.currentValue.forEach(workflow => {
            if (workflow.statusId === WorkflowStatus.ForApproval) {
              updatedWorkflows.push(workflow);
            } else {
              skippedWorkflows.push(workflow);
            }
          });
        }
      }
      this.updatedWorkflows = updatedWorkflows;
      this.skippedWorkflows = skippedWorkflows;
    }

    if (changes.workflowAction !== undefined && changes.workflowAction !== null) {
      if (changes.workflowAction.currentValue === WorkflowAction.Publish) {
        this.actionLabel = 'PUBLISH';
        this.comment = 'Auto Publication';
      } else {
        this.actionLabel = 'SUBMIT';
        this.comment = 'Auto Submission';
      }
    }
  }
  act() {
    if (this.workflowAction === WorkflowAction.Publish) {
      this.publish();
    } else {
      this.submit();
    }
  }

  private submit() {
    const workflowUpdateRequest = new WorkflowUpdateRequest(this.updatedWorkflows,
      this.comment, this.authService.getUser().email);
    this.workflowService.submit(workflowUpdateRequest)
      .subscribe((resp: ApiResult<UpdateReport>) => {
        resp.data.workflowAction = WorkflowAction.Submit;
        this.completed.emit(resp.data);
      }, () => this.errored.emit('Cannot submit selected items. Try again later or contact support.'));
  }

  private publish() {
    const workflowUpdateRequest = new WorkflowUpdateRequest(this.updatedWorkflows,
      this.comment, this.authService.getUser().email);
    this.workflowService.publish(workflowUpdateRequest)
      .subscribe((resp: ApiResult<UpdateReport>) => {
        resp.data.workflowAction = WorkflowAction.Publish;
        this.completed.emit(resp.data);
      }, () => this.errored.emit('Cannot publish selected items. Try again later or contact support.'));
  }

  cancel() {
    this.canceled.emit();
  }

}
