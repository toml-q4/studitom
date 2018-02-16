import { Workflow } from './workflow';

// export interface Group {
//    id: number,
//    name: string,
//    workflows: Workflow[],
//    workflowIds: string[],
// };

export class Group {
  public id: number;
  public name: string;
  public description: string;
  public ungrouped: boolean;
  public workflows: Workflow[];
  public workflowIds: string[];

  constructor() {
    this.workflowIds = new Array<string>();
    this.workflows = new Array<Workflow>();
  }
};
