import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommitteeModule } from './committee/committee.module';
import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';
import { NavComponent } from './nav/nav.component';
import { ReportsModule } from './reports/reports.module';

@NgModule({
    declarations: [AppComponent, NavComponent],
    imports: [
        NgxPageScrollModule,
        NgxPageScrollCoreModule.forRoot({
            easingLogic: (t, b, c, d) => {
                // easeInOutExpo easing
                if (t === 0) {
                    return b;
                }

                if (t === d) {
                    return b + c;
                }

                if ((t /= d / 2) < 1) {
                    return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
                }

                return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
            },
            scrollOffset: 50,
            duration: 500,
        }),
        BrowserModule,
        FooterModule,
        HomeModule,
        AppRoutingModule,
        ReportsModule,
        CommitteeModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
