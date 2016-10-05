import { Component } from '@angular/core';

class KeyPoint {
    title: string;
    description: string;
    icon: string;
}

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss', '../shared/section.component.scss']
})
export class IntroComponent {
    keyPoints: Array<KeyPoint> = [{
        title: 'Learning Opportunity',
        description: 'Be able to learn how the markets work, signal recognition and understanding technical analyses',
        icon: 'line-chart'
    },
    {
        title: 'Access to society social events',
        description: 'Learn from others stuff',
        icon: 'comments-o'
    }, {
        title: 'Priveleged access to QMTIS Alumni Network',
        description: '',
        icon: 'graduation-cap'
    }, {
        title: 'Benefit from guest speakers and professionals',
        description: '',
        icon: 'bullhorn'
    }, {
        title: 'Networking oppurtunities with industry professionals',
        description: '',
        icon: 'users'
    }, {
        title: 'Possibility to join 1:1 mentorship programme',
        description: '',
        icon: 'rocket'
    }];
}
