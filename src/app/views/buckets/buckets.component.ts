import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bucket } from '../shared/domains/bucket';
import { BucketService } from '../shared/services/bucket.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'q4-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.scss']
})
export class BucketsComponent implements OnInit {

  buckets$: Observable<Bucket[]>;
  bucketSelections: SelectItem[];
  bucketSelection: Bucket;
  constructor(private bucketService: BucketService) {
    this.bucketSelections = [
      { label: 'Everything active', value: { id: 1, name: 'filter name' } }
    ];
  }

  ngOnInit() {
    this.buckets$ = this.bucketService.get();
  }
  trackBucket(index, bucket) {
    return bucket ? bucket.id : undefined;
  }

}
