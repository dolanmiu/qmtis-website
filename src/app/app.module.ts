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
import { EventsComponent } from './events/events.component';

import { HeroModule } from './hero/hero.module';
import { FooterModule } from './footer/footer.module';

import { IconTextBlockComponent } from './shared/icon-text-block/icon-text-block.component';

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
    IconTextBlockComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
