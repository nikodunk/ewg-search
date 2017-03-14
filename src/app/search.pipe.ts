import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform(value, args) {
    // if (!args[0]) {
    //   return value;
    // } else if (value) {
      if(typeof args == 'string'){args = args.toLowerCase()}
      return value.filter(item => {
        for (let key in item) {
          if (item[key].indexOf(args) !== -1) {
                return true;
              }
            }
          });
    // }
  }
}


