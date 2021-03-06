import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workflow } from '../domains/workflow';
import { PreviewUrl } from '../domains/previewUrl';

@Injectable()
export class WorkflowService {

  constructor(private http: HttpClient) { }

  getByBucketId(bucketId: number) {
    return this.http.get<Workflow[]>(`http://localhost:3000/buckets/${bucketId}/workflows`);
  }

  get(workflowId: string) {
    return this.http.get<Workflow>(`http://localhost:3000/workflows/${workflowId}`).delay(1000);
  }

  getPreviewLink(workflow: Workflow) {
    return this.http.get<PreviewUrl>(`http://localhost:3000/previewUrl`);
  }
}
