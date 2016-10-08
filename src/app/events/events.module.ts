import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events.component';
import { EventCardComponent } from './event-card/event-card.component';

import { CutPipe } from '../shared/cut.pipe';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    declarations: [
        EventsComponent,
        EventCardComponent,
        CutPipe
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDBJz2_mr_wf4cpUc40NUZtWwDX3Hl439E'
        })
    ],
    providers: [
    ],
    exports: [
        EventsComponent
    ]
})
export class EventsModule { }
