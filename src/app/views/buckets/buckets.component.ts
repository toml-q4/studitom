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
  selectedBucket: Bucket;
  dropdownIcon = 'fas fa-angle-down';
  constructor(private bucketService: BucketService) {
  }

  ngOnInit() {
    this.bucketService.get().subscribe(buckets => {
      this.buckets = buckets;
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
  trackBucket(index, bucket) {
    return bucket ? bucket.id : undefined;
  }
  toggleDropdownIcon(arrowDirection: string) {
    this.dropdownIcon = 'fas fa-angle-' + arrowDirection;
  }
}
