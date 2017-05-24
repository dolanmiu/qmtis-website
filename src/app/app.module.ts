import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FooterModule,
        HomeModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
