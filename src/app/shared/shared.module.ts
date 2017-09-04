import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { CutPipe } from './cut.pipe';
import { DateSanitizerService } from './date-sanitizer.service';
import { FacebookService } from './fb.service';
import { IconTextBlockComponent } from './icon-text-block/icon-text-block.component';
import { RemoveHtmlTagsPipe } from './remove-html-tags.pipe';

@NgModule({
    declarations: [
        IconTextBlockComponent,
        CutPipe,
        RemoveHtmlTagsPipe,
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
        CutPipe,
        RemoveHtmlTagsPipe,
    ],
})
export class SharedModule { }
