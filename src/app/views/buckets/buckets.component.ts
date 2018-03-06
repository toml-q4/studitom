import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Bucket } from '../shared/domains/bucket';
import { BucketService } from '../shared/services/bucket.service';
import { SelectItem } from 'primeng/api';
import { BucketModel } from './bucket/bucket.model';
import { BucketFilter } from './bucketFilter';

@Component({
  selector: 'q4-buckets',
  templateUrl: './buckets.component.html',
  styleUrls: ['./buckets.component.scss']
})
export class BucketsComponent implements OnInit {
  bucketModels: BucketModel[] = new Array<BucketModel>();
  otherBucketModels: BucketModel[] = new Array<BucketModel>();
  featuredBucket: BucketModel;

  bucketFilterSelections: SelectItem[] = new Array<SelectItem>();
  selectedBucketFilter: BucketFilter;

  dialogVisible = false;
  dialogHeader = 'Dialog Header';
  constructor(private bucketService: BucketService) {
  }

  ngOnInit() {
    this.bucketService.get().subscribe(buckets => {
      const allActiveBuckets = new BucketFilter('All active bucket', []);
      const bucketModels = new Array<BucketModel>();
      const bucketFilterSelections = new Array<SelectItem>();
      buckets.forEach(bucket => {
        const bucketModel = new BucketModel();
        bucketModel.id = bucket.id;
        bucketModel.name = bucket.name;
        bucketModel.description = bucket.description;
        bucketModel.dueDate = bucket.dueDate;
        bucketModel.archived = bucket.archived;
        bucketModel.active = true;

        if (bucketModel.active) {
          allActiveBuckets.bucketIds.push(bucketModel.id);
        }

        bucketFilterSelections.push({
          label: bucketModel.name,
          value: new BucketFilter(bucketModel.name, [bucketModel.id])
        });

        bucketModels.push(bucketModel);
      });

      if (allActiveBuckets.bucketIds.length > 0) {
        bucketFilterSelections.unshift({
          label: `${allActiveBuckets.name} (${allActiveBuckets.bucketIds.length})`,
          value: allActiveBuckets
        });
      }

      this.bucketFilterSelections = bucketFilterSelections;
      this.bucketModels = bucketModels;
      this.filterBuckets({ value: { bucketIds: this.bucketFilterSelections[0].value.bucketIds } });
    });
  }
  filterBuckets($event: any) {
    const selectedBucketIds: number[] = $event.value.bucketIds;
    const selectedBucketModels = new Array<BucketModel>();

    this.bucketModels.forEach(bucketModel => {
      if (selectedBucketIds.indexOf(bucketModel.id) > -1) {
        selectedBucketModels.push(Object.assign({}, bucketModel));
      }
    });

    this.featuredBucket = selectedBucketModels.shift();

    if (selectedBucketModels.length > 0) {
      this.otherBucketModels = selectedBucketModels;
    }
  }
  trackByBucketId(index, bucket) {
    return bucket ? bucket.id : undefined;
  }

  onErrored($event: any) {
    this.notificationService.showError('Failed to complete. Try again later or contact support.');
    this.displayDialog = false;
  }

  onCompleted(updateReport: UpdateReport) {
    let message: string;
    if (updateReport.workflowAction === WorkflowAction.Submit) {
      message = `Content has been submitted for approval.`;
    } else {
      message = `Content has been published.`;
    }

    if (updateReport.failed > 0) {
      message = `${message} However, there ${updateReport.failed > 1 ? 'are' : 'is'}
       ${updateReport.failed} ${updateReport.failed > 1 ? 'items' : 'item'} skipped.`;
    }

    this.notificationService.showInfo(message);

    if (updateReport.succeeded > 0) {
      this.selectedWorkflows = [];
      this.modified.emit();
    }
    this.displayDialog = false;
  }

  onCanceled($event: any) { this.displayDialog = false; }
}
