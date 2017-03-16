import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform(value, args) {
      return value.filter(function(item) { 
             return item.name.toUpperCase().indexOf(args.toUpperCase()) !== -1 
    })
  }
}