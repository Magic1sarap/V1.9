import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtml'
})
export class StripHtmlPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace(/<.*?>|&nbsp;/g, ''); //replace tags as empty strings
  }

}

// https://stackoverflow.com/questions/46271634/strip-html-in-angular-template-binding
// Refer to this stackoverflow question for more context about the problem and its solution. 