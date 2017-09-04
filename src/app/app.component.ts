import { Location, PopStateEvent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PageScrollConfig } from 'ng2-page-scroll';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    private lastPoppedUrl: string;

    constructor(private router: Router, private location: Location) {
        PageScrollConfig.defaultScrollOffset = 50;
        PageScrollConfig.defaultEasingLogic = {
            ease: (t, b, c, d) => {
                // easeInOutExpo easing
                if (t === 0) {
                    return b;
                }

                if (t === d) {
                    return b + c;
                }

                if ((t /= d / 2) < 1) {
                    return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                }

                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
            },
        };
        PageScrollConfig.defaultDuration = 500;
    }

    public ngOnInit(): void {
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((ev) => {
            if (ev instanceof NavigationEnd) {
                if (ev.url === this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                } else {
                    window.scrollTo(0, 0);
                }
            }
        });
    }
}
