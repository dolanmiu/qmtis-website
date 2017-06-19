import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackdropComponent } from './backdrop/backdrop.component';
import { BloggerService } from './blogger.service';
import { HeroComponent } from './hero/hero.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ReportComponent } from './report/report.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';

@NgModule({
    declarations: [
        ReportsComponent,
        PostCardComponent,
        HeroComponent,
        BackdropComponent,
        ReportComponent,
    ],
    imports: [
        CommonModule,
        ReportsRoutingModule,
    ],
    providers: [
        BloggerService,
    ],
    exports: [
        ReportsComponent,
    ],
})
export class ReportsModule { }
