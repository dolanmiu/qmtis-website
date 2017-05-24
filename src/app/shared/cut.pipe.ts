import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cut' })
export class CutPipe implements PipeTransform {
    public transform(value: string, length: number): string {
        if (!value) {
            return value;
        }

        if (value.length < length) {
            return value;
        }

        return value.substring(0, length) + '...';
    }
}
