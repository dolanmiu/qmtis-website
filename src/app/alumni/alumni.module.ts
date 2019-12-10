import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { AlumniComponent } from './alumni.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
    declarations: [AlumniComponent, HeroComponent, BackdropComponent],
    imports: [CommonModule, SharedModule],
    exports: [AlumniComponent],
})
export class AlumniModule {}
