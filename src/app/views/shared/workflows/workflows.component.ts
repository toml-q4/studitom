import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Workflow } from '../domains/workflow';
import { WorkflowModel } from './workflow.model';

@Component({
  selector: 'q4-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent implements OnChanges {
  @Input() workflows: Workflow[];
  workflowModels: WorkflowModel[] = new Array<WorkflowModel>();
  selectedAll: boolean;
  constructor() {
    this.loadWorkflows();
  }

  ngOnChanges() {
    this.loadWorkflows();
  }

  toggleAll() {
    this.workflowModels.forEach(workflowModel => {
      workflowModel.selected = this.selectedAll;
    });
  }
  loadWorkflows() {
    if (this.workflows !== undefined) {
      this.workflows.forEach(workflow => {
        const workflowModel = new WorkflowModel();
        workflowModel.id = workflow.id;
        workflowModel.name = workflow.name;
        workflowModel.status = workflow.status;
        workflowModel.type = workflow.type;
        workflowModel.languageId = workflow.languageId;
        workflowModel.selected = false;
        this.workflowModels.push(workflowModel);
      });
    }
  }

  trackById(workflowModel: WorkflowModel) {
    return workflowModel.id;
  }
}
