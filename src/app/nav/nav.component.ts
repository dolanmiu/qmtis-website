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
        },
        {
            text: 'Partners',
            route: '#partners'
        }
    ];

    scrolled: boolean;

    constructor(renderer: Renderer) {
        renderer.listenGlobal('window', 'scroll', (evt: Event) => {
            console.log(document.body.scrollTop);
            this.scrolled = document.body.scrollTop > 0 ? true : false;
        });
    }
}
