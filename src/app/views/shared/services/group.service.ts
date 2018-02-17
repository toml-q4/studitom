import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../domains/group';

@Injectable()
export class GroupService {

  constructor(private http: HttpClient) { }

  getByBucketId(bucketId: number) {
    return this.http.get<Group[]>(`http://localhost:3000/buckets/${bucketId}/groups`);
  }
}
