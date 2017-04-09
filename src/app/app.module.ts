import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { AboutComponent } from './about/about.component';
import { CommitteeComponent } from './committee/committee.component';
import { IntroComponent } from './intro/intro.component';
import { PartnersComponent } from './partners/partners.component';
import { JoinComponent } from './join/join.component';

import { HeroModule } from './hero/hero.module';
import { FooterModule } from './footer/footer.module';
import { EventsModule } from './events/events.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        BackdropComponent,
        AboutComponent,
        CommitteeComponent,
        IntroComponent,
        JoinComponent,
        PartnersComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HeroModule,
        FooterModule,
        EventsModule,
        SharedModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
