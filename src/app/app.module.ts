import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { CommitteeComponent } from './committee/committee.component';
import { IntroComponent } from './intro/intro.component';
import { PartnersComponent } from './partners/partners.component';
import { JoinComponent } from './join/join.component';
import { FacebookPhotoComponent } from './footer/fb-photo/fb-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    BackdropComponent,
    HeroComponent,
    AboutComponent,
    CommitteeComponent,
    IntroComponent,
    JoinComponent,
    FacebookPhotoComponent,
    PartnersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
