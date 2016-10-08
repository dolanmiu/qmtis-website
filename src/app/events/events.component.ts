import { Component } from '@angular/core';
import { FacebookService } from '../shared/fb.service';

interface Event {
    name: string;
    place: {
        location: {
            latitude: number,
            longitude: number
        }
    };
    description: string;
    start_time: string;
}

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss', '../shared/section.component.scss'],
    providers: [FacebookService]
})
export class EventsComponent {
    events: Array<any>;

    currentEvent: Event = {
        name: '',
        place: {
            location: {
                latitude: 0,
                longitude: 0
            }
        },
        description: '',
        start_time: '2016-01-20T19:00:00+0000'
    };

    currentLat: number;
    currentLng: number;

    constructor(private facebookService: FacebookService) {

        this.facebookService.getEvents().subscribe(
            events => {
                console.log(events.data);
                this.currentEvent = events.data[0];
                this.LoadEventToSide(this.currentEvent);
                this.events = events.data;
            },
            err => {
            });
    }

    public LoadEventToSide(event: Event): void {
        this.currentEvent = event;
        this.currentLat = event.place.location ? event.place.location.latitude : 51.524157676276;
        this.currentLng = event.place.location ? event.place.location.longitude : -0.040120183598639;
    }
}
