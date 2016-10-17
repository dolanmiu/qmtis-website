import { Injectable } from '@angular/core';

@Injectable()
export class DateSanitizerService {

    constructor() {

    }

    public sanitize(dateString: string): string {
        let re = /(\d+-\d+-\w+:\d+:\d+)/;

        let matches = dateString.match(re);
        return matches[0];
    }
}
