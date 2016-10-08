import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({ name: 'cut' })
export class CutPipe implements PipeTransform {
    transform(value: string, length: number): string {
        if (!value) {
            return value;
        }

        if (value.length < length) {
            return value;
        }

        return value.substring(0, length) + '...';
    }
}
