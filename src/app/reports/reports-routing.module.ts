import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReportComponent } from './report/report.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'reports/report', component: ReportComponent,
            },
        ]),
    ],
    declarations: [],
    exports: [
        RouterModule,
    ],
})
export class ReportsRoutingModule { }
