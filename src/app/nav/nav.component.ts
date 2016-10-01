import { Component, Renderer } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    links = [
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
        }
    ];

    scrolled: boolean;

    constructor(renderer: Renderer) {
        renderer.listenGlobal('window', 'scroll', (evt: Event) => {
            this.scrolled = document.body.scrollTop > 60 ? true : false;
        });
    }
}
