import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpModule } from '@angular/http';
import { CommiteeComponent } from './committee.component';

describe('CommiteeComponent', () => {
    let component: CommiteeComponent;
    let fixture: ComponentFixture<CommiteeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CommiteeComponent],
            imports: [
                HttpModule,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CommiteeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
