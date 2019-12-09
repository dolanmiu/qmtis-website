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
    public member$: Observable<any>;

    constructor(http: Http, route: ActivatedRoute, router: Router) {
        this.member$ = route.queryParams.pipe(
            flatMap((params) => {
                console.log(params);
                return http.get('/assets/committee/details.json').pipe(
                    map((res) => res.json()),
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
