/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { AboutComponent } from './about/about.component';
import { CommitteeComponent } from './committee/committee.component';
import { IntroComponent } from './intro/intro.component';
import { JoinComponent } from './join/join.component';
import { PartnersComponent } from './partners/partners.component';

import { HeroModule } from './hero/hero.module';
import { FooterModule } from './footer/footer.module';

describe('App: QmtisWebsite', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        BackdropComponent,
        AboutComponent,
        CommitteeComponent,
        IntroComponent,
        JoinComponent,
        PartnersComponent
      ],
      imports: [
        HttpModule,
        HeroModule,
        FooterModule
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  /*it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));*/
});
