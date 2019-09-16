import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) {return [];}
    if(!searchText) {return items;}
searchText = searchText.toString().toLowerCase();

return items.filter( it => {
      return it.eventtitle.toString().toLowerCase().includes(searchText);
    });
   }
}