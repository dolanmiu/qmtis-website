import { Component } from '@angular/core';
import { PageScrollConfig } from 'ngx-page-scroll';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor() {
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
                    return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
                }

                return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
            },
        };
        PageScrollConfig.defaultDuration = 500;
    }
}
