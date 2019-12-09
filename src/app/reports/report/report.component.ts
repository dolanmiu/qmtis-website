import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, first, flatMap, map } from 'rxjs/operators';

import { BloggerService } from '../blogger.service';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss', '../../shared/section.component.scss'],
})
export class ReportComponent implements OnInit {
    public post$: Observable<Post>;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly bloggerService: BloggerService,
        private readonly router: Router,
    ) {
        this.router.events.pipe(first()).subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    }

    public ngOnInit(): void {
        this.post$ = this.activatedRoute.queryParams.pipe(
            flatMap((params) => {
                return this.bloggerService.post(params.id);
            }),
            map((post) => {
                return {
                    ...post,
                    content: post.content.replace(/<!--[\s\S]*?-->/g, ''),
                };
            }),
            catchError((err) => {
                this.router.navigate(['/reports']);
                return Observable.throw(err);
            }),
        );
    }
}
