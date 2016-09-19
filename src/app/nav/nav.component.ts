import {Component} from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    public links = [
        {
            text: 'Home',
            route: '/'
        },
        {
            text: 'About Us',
            route: 'about-us'
        },
        {
            text: 'Committee',
            route: 'committee'
        },
        {
            text: 'Join Us',
            route: 'join-us'
        }
    ];
}
