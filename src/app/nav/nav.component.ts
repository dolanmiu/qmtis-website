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
            route: '#about',
        },
        {
            text: 'Committee',
            route: '#committee',
        },
        {
            text: 'Join Us',
            route: '#join',
        },
        {
            text: 'Events',
            route: '#events',
        },
    ];

    public scrolled: boolean;

    constructor(renderer: Renderer) {
        renderer.listenGlobal('window', 'scroll', () => {
            this.scrolled = document.body.scrollTop > 60 ? true : false;
        });
    }
}
