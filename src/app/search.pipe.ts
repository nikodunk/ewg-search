import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform(value, args) {
    // if (!args) {
    //   return value;
    // } else if (value) {
       if(typeof args == 'string'){args = args.toUpperCase()}
      return value.filter(item => {
        for (let key in item) {
          if ((typeof item[key] === 'string' || item[key] instanceof String) && 
              (item[key].toUpperCase().indexOf(args) !== -1)) {
            return true;
          }
        }
      });
    }
  }