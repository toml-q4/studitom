import { WorkflowAction } from "../enums/workflow-action.enum";

export interface UpdateReport {
    succeeded: number;
    failed: number;
    workflowAction: WorkflowAction;
}
