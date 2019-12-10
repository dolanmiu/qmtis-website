import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-committee',
    templateUrl: './committee.component.html',
    styleUrls: ['./committee.component.scss', '../shared/section.component.scss'],
})
export class CommiteeComponent implements OnInit {
    public readonly member$: Observable<CommitteeMember>;
    public readonly year: Observable<number>;

    constructor(http: Http, route: ActivatedRoute, router: Router) {
        this.year = route.queryParams.pipe(map((params) => params.year));
        this.member$ = route.queryParams.pipe(
            flatMap((params) => {
                console.log(params);
                return http.get(`/assets/committee/${params.year}/details.json`).pipe(
                    map((res) => res.json() as { [key: string]: CommitteeMember }),
                    map((all) => all[params.member]),
                    tap((member) => {
                        if (!member) {
                            router.navigate(['/']);
                        }
                    }),
                );
            }),
        );
    }

    public ngOnInit(): void {}
}
