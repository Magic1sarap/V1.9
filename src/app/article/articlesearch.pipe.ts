import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'articlecategory'
})
export class ArticlePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) {return [];}
    if(!searchText) {return items;}
searchText = searchText.toString().toLowerCase();

return items.filter( it => {
      return it.header.toString().toLowerCase().includes(searchText);
    });
   }
}