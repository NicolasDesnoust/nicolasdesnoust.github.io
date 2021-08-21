import { Pipe, PipeTransform } from '@angular/core';
import { Image } from "src/app/home/model/image";

@Pipe({
  name: 'srcset',
})
export class SrcsetPipe implements PipeTransform {
  transform(value: Image | undefined): string {
    let srcset = '';

    if(!value) {
      return '';
    }

    for (let width of value.widths) {
      srcset += `assets/images/${value.folder}/${value.folder}_w_${width}.jpg   ${width}w,`;
    }

    return srcset;
  }
}
