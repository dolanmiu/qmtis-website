import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: HomeComponent,
            },
            {
                path: 'reports', component: ReportsComponent,
            },
        ]),
    ],
    declarations: [],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
