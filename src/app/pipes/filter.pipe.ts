import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchValue: any, searchKey?: string): any[] {
    if (!items || !searchValue) {
      return items;
    }

    return items.filter(item => {
      if (searchKey) {
        return item[searchKey] === searchValue;
      } else {
        return item === searchValue;
      }
    });
  }
}