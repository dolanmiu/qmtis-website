import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeHtmlTags',
})
export class RemoveHtmlTagsPipe implements PipeTransform {

    public transform(value: any, args?: any): any {
        return value ? String(value).replace(/<[^>]+>/gm, '') : '';
    }

}
