import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case'
})
export class CasePipe implements PipeTransform {

  transform(value: any): any {
    if(!value) {
      return null;
    }

    let toReturn = (<string>value).toLocaleLowerCase();

    return toReturn;

  }

}
