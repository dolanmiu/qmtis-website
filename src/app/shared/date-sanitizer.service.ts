import { Injectable } from '@angular/core';

@Injectable()
export class DateSanitizerService {
    constructor() {}

    public sanitize(dateString: string): string {
        if (!dateString) {
            return 'Date Empty';
        }

        const re = /(\d+-\d+-\w+:\d+:\d+)/;

        const matches = dateString.match(re);
        return matches ? matches[0] : '';
    }
}
