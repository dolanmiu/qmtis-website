import { Component, Input } from '@angular/core';
import { DateSanitizerService } from '../../../shared/date-sanitizer.service';

@Component({
    selector: 'app-event-card',
    templateUrl: './event-card.component.html',
    styleUrls: ['./event-card.component.scss'],
    providers: [DateSanitizerService],
})
export class EventCardComponent {
    @Input()
    public name: string;
    @Input()
    public description: string;
    @Input()
    public date: string;
    @Input()
    public active: boolean;

    constructor(private readonly dateSanitizerService: DateSanitizerService) {}

    public sanitizeDate(dateString: string): string {
        return this.dateSanitizerService.sanitize(dateString);
    }
}
