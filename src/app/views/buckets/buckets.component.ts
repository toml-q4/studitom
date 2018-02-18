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
  buckets: Bucket[];
  bucketSelections: SelectItem[] = new Array<SelectItem>();
  bucketSelection: Bucket;
  constructor(private bucketService: BucketService) {
  }

  ngOnInit() {
    this.bucketService.get().subscribe(buckets => {
      this.buckets = buckets;
      this.bucketSelections.push({
        label: 'Everything active',
        value: { id: 0, name: 'name'}}
      })
      buckets.forEach(bucket => {
        this.bucketSelections.push({
          label: bucket.name,
          value: bucket
        });
      });
    });
  }
  trackBucket(index, bucket) {
    return bucket ? bucket.id : undefined;
  }

}
