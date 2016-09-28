import { Component } from '@angular/core';

@Component({
    selector: 'app-committee',
    templateUrl: './committee.component.html',
    styleUrls: ['./committee.component.scss', '../shared/section.component.scss']
})
export class CommitteeComponent {
    year: number;

    constructor() {
        let currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 9);
        this.year = currentDate.getFullYear();
    }
}
