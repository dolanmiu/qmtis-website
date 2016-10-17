import { Component, Input } from '@angular/core';
import { DateSanitizerService } from '../../shared/date-sanitizer.service';

@Component({
    selector: 'app-event-card',
    templateUrl: './event-card.component.html',
    styleUrls: ['./event-card.component.scss'],
    providers: [DateSanitizerService]
})
export class EventCardComponent {

    @Input() name: string;
    @Input() description: string;
    @Input() date: string;
    @Input() active: boolean;

    constructor(private dateSanitizerService: DateSanitizerService) {
    }

    public sanitizeDate(dateString: string): string {
        return this.dateSanitizerService.sanitize(dateString);
    }
}
