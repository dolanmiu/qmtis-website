import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BackdropComponent } from './backdrop/backdrop.component';
import { CommiteeComponent } from './committee.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CommiteeComponent, HeroComponent, BackdropComponent],
    exports: [CommiteeComponent],
})
export class CommitteeModule {}
