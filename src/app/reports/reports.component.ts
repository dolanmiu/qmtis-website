import { Component, OnInit } from '@angular/core';

import { BloggerService } from './blogger.service';

@Component({
    selector: 'app-reports',
    templateUrl: './reports.component.html',
    styleUrls: ['./reports.component.scss', '../shared/section.component.scss'],
})
export class ReportsComponent implements OnInit {

    constructor(private bloggerService: BloggerService) { }

    public ngOnInit(): void {
        this.bloggerService.blog().subscribe((res) => {
            console.log(res);
        });
    }
}
