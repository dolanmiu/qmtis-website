import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events.component';
import { EventCardComponent } from './event-card/event-card.component';

import { CutPipe } from '../shared/cut.pipe';

@NgModule({
    declarations: [
        EventsComponent,
        EventCardComponent,
        CutPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [
    ],
    exports: [
        EventsComponent
    ]
})
export class EventsModule { }
