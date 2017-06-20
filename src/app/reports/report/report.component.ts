import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BloggerService } from '../blogger.service';

@Component({
    selector: 'app-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss', '../../shared/section.component.scss'],
})
export class ReportComponent implements OnInit {
    public post: Observable<Post>;

    constructor(private activatedRoute: ActivatedRoute, private bloggerService: BloggerService) {
    }

    public ngOnInit(): void {
        this.post = this.activatedRoute.queryParams.flatMap((params) => {
            return this.bloggerService.post(params.id);
        });
    }
}
