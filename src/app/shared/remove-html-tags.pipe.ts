import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'removeHtmlTags',
})
export class RemoveHtmlTagsPipe implements PipeTransform {
    // tslint:disable-next-line:no-any
    public transform(value: any, args?: any): string {
        return value ? String(value).replace(/<[^>]+>/gm, '') : '';
    }
}
