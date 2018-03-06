import { Workflow } from "./workflow";

export class WorkflowUpdateRequest {
    constructor(
        public workflows: Workflow[],
        public comment: string,
        public email: string
    ) { }
}
