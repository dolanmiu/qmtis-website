import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FacebookModule } from 'ngx-facebook';

import { AboutComponent } from './about/about.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { CommitteeComponent } from './committee/committee.component';
import { EventsModule } from './events/events.module';
import { HeroModule } from './hero/hero.module';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { JoinComponent } from './join/join.component';
import { PartnersComponent } from './partners/partners.component';

import { SharedModule } from '../shared/shared.module';
import { SponsorsComponent } from './sponsors/sponsors.component';

@NgModule({
    declarations: [HomeComponent, AboutComponent, BackdropComponent, CommitteeComponent, IntroComponent, JoinComponent, PartnersComponent, SponsorsComponent],
    imports: [CommonModule, EventsModule, HeroModule, SharedModule, FacebookModule.forRoot()],
    exports: [HomeComponent],
})
export class HomeModule {}
