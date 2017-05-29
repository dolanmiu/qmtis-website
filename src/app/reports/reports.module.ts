import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostCardComponent } from './post-card/post-card.component';
import { ReportsComponent } from './reports.component';

@NgModule({
    declarations: [
        ReportsComponent,
        PostCardComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ReportsComponent,
    ],
})
export class ReportsModule { }
