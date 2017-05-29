import { Component } from '@angular/core';
import { Members } from './committee-members';

@Component({
    selector: 'app-committee',
    templateUrl: './committee.component.html',
    styleUrls: ['./committee.component.scss', '../../shared/section.component.scss'],
})
export class CommitteeComponent {
    public year: number;
    public members: Members;

    constructor() {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 8);
        this.year = currentDate.getFullYear();

        this.members = new Members();
    }
}
