import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 

import { IconTextBlockComponent } from './icon-text-block/icon-text-block.component';
import { CutPipe } from './cut.pipe';
import { SmoothAnchorLinkDirective } from './smooth-anchor-link.directive';
import { FacebookService } from './fb.service';
import { DateSanitizerService } from './date-sanitizer.service';

@NgModule({
    declarations: [
        IconTextBlockComponent,
        SmoothAnchorLinkDirective,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [
        FacebookService,
        DateSanitizerService,
    ],
    exports: [
        IconTextBlockComponent,
        SmoothAnchorLinkDirective,
    ]
})
export class SharedModule { }
