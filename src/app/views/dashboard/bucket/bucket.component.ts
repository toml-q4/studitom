import { Component, OnInit } from '@angular/core';
import { BucketModel } from 'app/views/dashboard/bucket/bucket.model';

@Component({
  selector: 'q4-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  bucket: BucketModel;

  constructor() {
    this.bucket = new BucketModel();
    this.bucket.id = 1;
    this.bucket.name = 'First Quarter';

  }

  ngOnInit() {
  }
  submit() {}
}
