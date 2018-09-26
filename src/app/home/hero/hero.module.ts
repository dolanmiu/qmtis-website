import { NgModule } from '@angular/core';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { HeroComponent } from './hero.component';
import { MouseIconComponent } from './mouse-icon/mouse-icon.component';

@NgModule({
    declarations: [HeroComponent, MouseIconComponent],
    imports: [Ng2PageScrollModule],
    providers: [],
    bootstrap: [],
    exports: [HeroComponent],
})
export class HeroModule {}
