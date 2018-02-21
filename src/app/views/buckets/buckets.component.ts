import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bucket } from '../shared/domains/bucket';
import { BucketService } from '../shared/services/bucket.service';
import { SelectItem } from 'primeng/api';
import { BucketModel } from './bucket/bucket.model';

@Component({
  selector: 'q4-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.scss']
})
export class BucketsComponent implements OnInit {
  bucketModels: BucketModel[] = new Array<BucketModel>();
  bucketSelections: SelectItem[] = new Array<SelectItem>();
  selectedBucket: Bucket;
  constructor(private bucketService: BucketService) {
  }

  ngOnInit() {
    this.bucketService.get().subscribe(buckets => {
      buckets.forEach(bucket => {
        const bucketModel = new BucketModel();
        bucketModel.id = bucket.id;
        bucketModel.name = bucket.name;
        bucketModel.description = bucket.description;
        bucketModel.dueDate = bucket.dueDate;
        bucketModel.archived = bucket.archived;
        bucketModel.hidden = false;

        this.bucketModels.push(bucketModel);
      });
      this.bucketSelections.push({
        label: 'Everything active',
        value: null
      });
      buckets.forEach(bucket => {
        this.bucketSelections.push({
          label: bucket.name,
          value: bucket
        });
      });
    });
  }
  trackByBucketId(index, bucket) {
    return bucket ? bucket.id : undefined;
  }
}
