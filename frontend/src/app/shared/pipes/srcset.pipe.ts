import { Pipe, PipeTransform } from '@angular/core';
import { Image } from "src/app/core/model/image";

@Pipe({
  name: 'srcset',
})
export class SrcsetPipe implements PipeTransform {
  transform(image: Image | undefined, layerIndex: number): string {
    let srcset = '';

    if(!image) {
      return '';
    }

    for (let width of image.layers[layerIndex].widths) {
      srcset += `assets/images/${image.folder}/${image.folder}_l${layerIndex}_w${width}.${ image.layers[layerIndex].extension }   ${width}w,`;
    }

    return srcset;
  }
}
