import { NgModule } from '@angular/core';

import { HeroComponent } from './hero.component';
import { MouseIconComponent } from './mouse-icon/mouse-icon.component';

@NgModule({
    declarations: [
        HeroComponent,
        MouseIconComponent,
    ],
    imports: [
    ],
    providers: [],
    bootstrap: [],
    exports: [
        HeroComponent,
    ],
})
export class HeroModule { }
