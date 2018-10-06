import { NgModule } from '@angular/core';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { HeroComponent } from './hero.component';
import { MouseIconComponent } from './mouse-icon/mouse-icon.component';

@NgModule({
    declarations: [HeroComponent, MouseIconComponent],
    imports: [NgxPageScrollModule],
    providers: [],
    bootstrap: [],
    exports: [HeroComponent],
})
export class HeroModule {}
