import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';
import { FacebookPhotoComponent } from './fb-photo/fb-photo.component';

@NgModule({
    declarations: [
        FooterComponent,
        FacebookPhotoComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        FooterComponent
    ]
})
export class FooterModule { }
