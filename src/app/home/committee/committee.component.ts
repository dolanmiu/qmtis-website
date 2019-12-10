import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-committee',
    templateUrl: './committee.component.html',
    styleUrls: ['./committee.component.scss', '../../shared/section.component.scss'],
})
export class CommitteeComponent {
    public readonly year: number;
    public readonly members$: Observable<CommitteeMember[]>;

    constructor(http: Http) {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 8);
        this.year = currentDate.getFullYear();

        this.members$ = http.get(`/assets/committee/${this.year}/details.json`).pipe(
            map((res) => res.json() as CommitteeMember[]),
            map((members) => {
                const arr: CommitteeMember[] = [];

                for (const key in members) {
                    if (!members[key]) {
                        continue;
                    }

                    arr.push(members[key]);
                }

                return arr;
            }),
        );
    }
}
