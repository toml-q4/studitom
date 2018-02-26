import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Workflow } from '../domains/workflow';
import { WorkflowModel } from './workflow.model';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'q4-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent implements OnChanges {
  @Input() workflows: Workflow[];
  @Input() ungrouped: boolean;
  workflowModels: WorkflowModel[] = new Array<WorkflowModel>();
  selectedAll: boolean;
  hoverDelay = 400;
  workflowTimeout: any;
  constructor() {
    this.loadWorkflows();
  }

  ngOnChanges() {
    this.loadWorkflows();
  }
  edit(workflow: WorkflowModel) {
    console.log('edit workflow logic for ' + workflow.id);
  }
  toggleAll() {
    this.workflowModels.forEach(workflowModel => {
      workflowModel.selected = this.selectedAll;
    });
  }
  loadWorkflows() {
    if (this.workflows !== undefined) {
      const workflowModels = new Array<WorkflowModel>();
      this.workflows.forEach(workflow => {
        const workflowModel = new WorkflowModel();
        workflowModel.id = workflow.id;
        workflowModel.name = workflow.name;
        workflowModel.status = workflow.status;
        workflowModel.type = workflow.type;
        workflowModel.languageId = workflow.languageId;
        workflowModel.selected = false;
        workflowModel.isActive = workflow.isActive;
        workflowModel.isDeleted = workflow.isDeleted;
        workflowModel.adminUrl = workflow.adminUrl;

        workflowModels.push(workflowModel);
      });

      this.workflowModels = workflowModels;
    }
  }

  trackById(index, workflowModel) {
    return workflowModel ? workflowModel.id : undefined;
  }

  showWorkflow($event, opWorkflow, workflow: WorkflowModel) {
    clearTimeout(this.workflowTimeout);
    this.workflowTimeout = setTimeout(() => {
      opWorkflow.show($event);
    }, this.hoverDelay);
  }

  hideWorkflow(opWorkflow) {
    clearTimeout(this.workflowTimeout);
    opWorkflow.hide();
  }
}
