import { Component, Renderer } from '@angular/core';

interface NavTab {
    text: string;
    route: string;
}

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
    public links: NavTab[] = [
        {
            text: 'About Us',
            route: 'about',
        },
        {
            text: 'Committee',
            route: 'committee',
        },
        {
            text: 'Join Us',
            route: 'join',
        },
        {
            text: 'Sponsors',
            route: 'sponsors',
        },
    ];

    public scrolled: boolean;

    constructor(renderer: Renderer) {
        renderer.listenGlobal('window', 'scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            this.scrolled = scrollTop > 60 ? true : false;
        });
    }
}
