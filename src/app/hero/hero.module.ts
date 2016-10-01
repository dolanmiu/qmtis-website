import { NgModule } from '@angular/core';
import { MouseIconComponent } from './mouse-icon/mouse-icon.component';
import { HeroComponent } from './hero.component';

@NgModule({
  declarations: [
      HeroComponent,
      MouseIconComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: [],
  exports: [
      HeroComponent
  ]
})
export class HeroModule { }
