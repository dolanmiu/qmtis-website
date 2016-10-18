import { Component, Renderer } from '@angular/core';

class NavTab {
    text: string;
    route: string;
}

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    links: Array<NavTab> = [
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
            text: 'Events',
            route: '#events'
        }
    ];

    scrolled: boolean;

    constructor(renderer: Renderer) {
        renderer.listenGlobal('window', 'scroll', (evt: Event) => {
            this.scrolled = document.body.scrollTop > 60 ? true : false;
        });
    }
}
