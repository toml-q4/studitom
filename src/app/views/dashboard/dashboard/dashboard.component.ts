import { Component, OnInit } from '@angular/core';
import { BucketService } from '../shared/bucket.service';
import { Observable } from 'rxjs/Observable';
import { Bucket } from '../bucket/bucket';

@Component({
  selector: 'q4-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  buckets$: Observable<Bucket[]>;
  constructor(private bucketService: BucketService) { }

  ngOnInit() {
    this.buckets$ = this.bucketService.get();
  }
  trackBucket(index, bucket) {
    return bucket ? bucket.id : undefined;
  }
}
