import { Component } from '@angular/core';

interface KeyPoint {
    title: string;
    icon: string;
}

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss', '../../shared/section.component.scss'],
})
export class IntroComponent {
    public keyPoints: KeyPoint[] = [
        {
            title: 'A Great learning opportunity',
            icon: 'line-chart',
        },
        {
            title: 'Access to society social events',
            icon: 'comments-o',
        },
        {
            title: 'Priveleged access to QMTIS Alumni Network',
            icon: 'graduation-cap',
        },
        {
            title: 'Benefit from guest speakers and professionals',
            icon: 'bullhorn',
        },
        {
            title: 'Networking oppurtunities with industry professionals',
            icon: 'users',
        },
        {
            title: 'Possibility to join 1 on 1 mentorship programmes',
            icon: 'rocket',
        },
    ];
}
