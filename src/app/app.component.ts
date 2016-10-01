import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [Window]
})
export class AppComponent {
    title = 'app works!';

    constructor() {

    }
}
