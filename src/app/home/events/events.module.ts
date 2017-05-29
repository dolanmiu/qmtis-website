import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventCardComponent } from './event-card/event-card.component';
import { EventsComponent } from './events.component';

import { SharedModule } from '../../shared/shared.module';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
    declarations: [
        EventsComponent,
        EventCardComponent,
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDBJz2_mr_wf4cpUc40NUZtWwDX3Hl439E',
        }),
        SharedModule,
    ],
    providers: [
    ],
    exports: [
        EventsComponent,
    ],
})
export class EventsModule { }
