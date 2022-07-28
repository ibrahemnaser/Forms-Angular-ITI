import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(searchArr: any[], searchText: string, searchProp: string[]) {
    let list: any = [];
    if (!searchText) {
      list = searchArr;
    } else {
      searchArr.forEach((selectedObject) => {
        searchProp.forEach((selectetProp) => {
          if (
            selectedObject[selectetProp] &&
            selectedObject[selectetProp]
              .toString()
              .toLowerCase()
              .includes(searchText.toLowerCase()) &&
            !list.includes(selectedObject)
          ) {
            list.push(selectedObject);
          }
        });
      });
    }

    return list;
  }
}
