import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'entityTypeText'
})
export class EntityTypeTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 'PressRelease') {
      return 'Press Release';
    }
    else {
      return '';
    }
  }

}
