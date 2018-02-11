import { Component, OnInit, Input } from '@angular/core';
import { Workflow } from './workflow';

@Component({
  selector: 'q4-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.css']
})
export class WorkflowComponent implements OnInit {
  @Input() workflow: Workflow;

  constructor() { }

  ngOnInit() {
  }

}
