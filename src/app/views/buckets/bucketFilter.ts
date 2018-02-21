export class BucketFilter {
  public name: string;
  public bucketIds: number[];

  constructor(name: string, bucketIds: number[]) {
    this.name = name;
    this.bucketIds = bucketIds;
  }
}
