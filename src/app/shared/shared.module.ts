import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { CutPipe } from './cut.pipe';
import { DateSanitizerService } from './date-sanitizer.service';
import { FacebookService } from './fb.service';
import { IconTextBlockComponent } from './icon-text-block/icon-text-block.component';
import { SmoothAnchorLinkDirective } from './smooth-anchor-link.directive';

@NgModule({
    declarations: [
        IconTextBlockComponent,
        SmoothAnchorLinkDirective,
        CutPipe,
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
        CutPipe,
    ],
})
export class SharedModule { }
