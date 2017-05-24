import { async, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { FooterModule } from './footer/footer.module';
import { HomeModule } from './home/home.module';

import { IconTextBlockComponent } from './shared/icon-text-block/icon-text-block.component';

describe('App: QmtisWebsite', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                NavComponent,
                IconTextBlockComponent,
            ],
            imports: [
                HttpModule,
                FooterModule,
                HomeModule
            ]
        });
    });

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
