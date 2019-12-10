import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { COMMITTEE_YEARS } from 'environments/committee-years';

@Component({
    selector: 'app-alumni',
    templateUrl: './alumni.component.html',
    styleUrls: ['./alumni.component.scss', '../shared/section.component.scss'],
})
export class AlumniComponent {
    public readonly membersGroups$: Observable<Array<{ year: number; members: CommitteeMember[] }>>;

    constructor(http: Http) {
        const detailsArray = COMMITTEE_YEARS.map((year) =>
            http.get(`/assets/committee/${year}/details.json`).pipe(
                map((res) => ({
                    res: res.json() as { [key: string]: CommitteeMember },
                    year: year,
                })),
            ),
        );

        this.membersGroups$ = combineLatest(detailsArray).pipe(
            map((detailsArr) => {
                return detailsArr.map((detail) => ({
                    year: detail.year,
                    res: detail.res,
                }));
            }),
            map((membersArr) => {
                return membersArr.map((members) => {
                    const arr: CommitteeMember[] = [];

                    for (const key in members.res) {
                        if (!members.res[key]) {
                            continue;
                        }

                        arr.push(members.res[key]);
                    }

                    return {
                        year: members.year,
                        members: arr,
                    };
                });
            }),
        );
    }
}
