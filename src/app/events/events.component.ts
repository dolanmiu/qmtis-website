import { Component } from '@angular/core';
import { FacebookService } from '../shared/fb-photos.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss', '../shared/section.component.scss'],
    providers: [FacebookService]
})
export class EventsComponent {
    events: Array<any>;

    constructor(private facebookService: FacebookService) {
        this.facebookService.getEvents().subscribe(
            events => {
                console.log(events.data);
                this.events = events.data;
            },
            err => {
            });
    }
}
