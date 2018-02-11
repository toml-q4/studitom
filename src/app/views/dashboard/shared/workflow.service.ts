import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workflow } from '../workflow/workflow';

@Injectable()
export class WorkflowService {

  constructor(private http: HttpClient) { }

  getByBucketId(bucketId: number) {
    return this.http.get<Workflow[]>(`http://localhost:3000/buckets/${bucketId}/workflows`);
  }

}
