import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bucket } from '../../shared/domains/bucket';
import { BucketService } from '../../shared/services/bucket.service';

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
