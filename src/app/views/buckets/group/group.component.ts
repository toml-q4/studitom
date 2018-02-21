import { Component, OnInit, Input } from '@angular/core';
import { Workflow } from '../../shared/domains/workflow';
import { WorkflowService } from '../../shared/services/workflow.service';
import { Group } from '../../shared/domains/group';

@Component({
  selector: 'q4-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  @Input() group: Group;
  selectedWorkdlows: Workflow[];
  cols: any[];

  expanded = false;
  constructor(private workflowService: WorkflowService) { }

  ngOnInit() {
    this.expanded = this.group.ungrouped;

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
  ];
  }

  expand() {
    this.expanded = !this.expanded;
  }

  preview(workflow: Workflow) {
    this.workflowService.getPreviewLink(workflow).subscribe(previewUrl => {
      window.open(previewUrl.value, '_blank');
    })
  }
}
