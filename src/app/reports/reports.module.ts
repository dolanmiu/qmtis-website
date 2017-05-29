import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ReportsComponent } from './reports.component';

@NgModule({
    declarations: [
        ReportsComponent,
        PostCardComponent,
        HeroComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        ReportsComponent,
    ],
})
export class ReportsModule { }
