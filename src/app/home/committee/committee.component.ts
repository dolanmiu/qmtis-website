import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-committee',
    templateUrl: './committee.component.html',
    styleUrls: ['./committee.component.scss', '../../shared/section.component.scss'],
})
export class CommitteeComponent {
    public year: number;
    public members$: Observable<any>;

    constructor(http: Http) {
        this.members$ = http
            .get('/assets/committee/details.json')
            .map((res) => res.json())
            .map((members) => {
                const arr = [];

                for (const key in members) {
                    if (!members[key]) {
                        continue;
                    }

                    arr.push(members[key]);
                }

                return arr;
            });

        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 8);
        this.year = currentDate.getFullYear();
    }
}
