import { Component, OnInit, Input } from '@angular/core';
import { Workflow } from '../../shared/domains/workflow';

@Component({
  selector: 'q4-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  @Input() workflow: Workflow;
  cbecked: boolean;
  constructor() { }

  ngOnInit() {
  }

}
