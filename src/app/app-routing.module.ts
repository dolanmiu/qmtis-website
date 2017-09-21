import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommiteeComponent } from './committee/committee.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { SponsorComponent } from './sponsor/sponsor.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: HomeComponent,
            },
            {
                path: 'reports', component: ReportsComponent,
            },
            {
                path: 'committee', component: CommiteeComponent,
            },
            {
                path: 'sponsors', component: SponsorComponent,
            },
        ]),
    ],
    declarations: [],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
