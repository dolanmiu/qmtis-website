import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../../shared/shared.module';
import { EventCardComponent } from './event-card/event-card.component';
import { EventsComponent } from './events.component';

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
