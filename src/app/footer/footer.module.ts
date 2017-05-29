import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FacebookPhotoComponent } from './fb-photo/fb-photo.component';
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FooterComponent,
        FacebookPhotoComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    exports: [
        FooterComponent,
    ],
})
export class FooterModule { }
