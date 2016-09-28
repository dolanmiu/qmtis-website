import { Component } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    public links = [
        {
            text: 'Home',
            route: '#home'
        },
        {
            text: 'Intro',
            route: '#intro'
        },
        {
            text: 'About Us',
            route: '#about'
        },
        {
            text: 'Committee',
            route: '#committee'
        },
        {
            text: 'Join Us',
            route: '#join'
        },
        {
            text: 'Partners',
            route: '#partners'
        }
    ];
}
