import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";

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
    public posts: Post[];

    constructor(private bloggerService: BloggerService, private router: Router) {
        this.router.events.first().subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                window.scrollTo(0, 0);
            }
        });
    }

    public ngOnInit(): void {
        this.bloggerService.blog().subscribe((res) => {
            this.pageReferences = Array(res.blog.posts.totalItems).fill({}).map((x, i) => {
                return {
                    id: i + 1,
                };
            });
            this.posts = res.posts.items;
            console.log(this.pageReferences);
        });
    }
}
