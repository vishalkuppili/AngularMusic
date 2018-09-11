import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ImagePath'
})

export class ImagePath implements PipeTransform {

    covers: String = '../../assets/covers/';
    albums: String = '../../assets/albums/';
    extension: String = '.jpg';
    path: string;

    transform(value: string, type: string): string {
        if (type === 'cover') {
            this.path = this.covers + value + this.extension;
        } 
        else if (type === 'album'){
            this.path = this.albums + value + this.extension;
        }

        else{
            this.path = '#'+ value;
        }

        return this.path;

    }
}