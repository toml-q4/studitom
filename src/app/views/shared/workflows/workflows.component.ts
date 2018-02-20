import { Component, OnInit, Input } from '@angular/core';
import { Workflow } from '../domains/workflow';

@Component({
  selector: 'q4-workflows',
  templateUrl: './workflows.component.html',
  styleUrls: ['./workflows.component.scss']
})
export class WorkflowsComponent implements OnInit {
  @Input() workflows: Workflow[];

  constructor() { }

  ngOnInit() {
  }

}
