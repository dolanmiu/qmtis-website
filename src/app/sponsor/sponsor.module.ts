import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackdropComponent } from './backdrop/backdrop.component';
import { HeroComponent } from './hero/hero.component';
import { SponsorComponent } from './sponsor.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SponsorComponent,
        HeroComponent,
        BackdropComponent,
    ],
    exports: [
        SponsorComponent,
    ],
})
export class SponsorModule { }
