import { Component, OnInit } from '@angular/core';

import { BloggerService } from './blogger.service';

interface PageReference {
    token?: string;
    id: number;
}

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss', '../shared/section.component.scss'],
})
export class ReportsComponent implements OnInit {
    public pageReferences: PageReference[];

    constructor(private bloggerService: BloggerService) { }

    public ngOnInit(): void {
        this.bloggerService.blog().subscribe((res) => {
            this.pageReferences = Array(res.blog.posts.totalItems).fill({}).map((x, i) => {
                return {
                    id: i + 1,
                };
            });
            console.log(this.pageReferences);
        });
    }
}
