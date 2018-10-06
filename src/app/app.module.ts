import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommitteeModule } from './committee/committee.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { NavComponent } from './nav/nav.component';
import { ReportsModule } from './reports/reports.module';

@NgModule({
    declarations: [AppComponent, NavComponent],
    imports: [NgxPageScrollModule, BrowserModule, FooterModule, HomeModule, AppRoutingModule, ReportsModule, CommitteeModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
