import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateString'
})
export class TruncateStringPipe implements PipeTransform {

  transform(value: string, limitString: number): string {
    if (value.length > limitString) {
      return value.slice(0, limitString)+ '...' 
    }
    return value
  }

}
