import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(email: string, ...args: any[]): string { 

    let firstPart  = email.substr(0,3);
    firstPart+='************';

    let arr = email.split('@');

    firstPart+=arr[1];

    return firstPart;
  }

}
