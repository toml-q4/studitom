import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bucket } from '../domains/bucket';

@Injectable()
export class BucketService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Bucket[]>('http://localhost:3000/buckets?_sort=archived');
  }
}
