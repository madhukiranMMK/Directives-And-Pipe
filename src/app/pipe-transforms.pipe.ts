import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
  pure: false
})
export class PipeTransformsPipe implements PipeTransform {
  transform(value, expression, reverse) {
    debugger;
    var isArray = value instanceof Array;
    if (isArray) {
        return value.toString();
    }
    return value;
}
  
}