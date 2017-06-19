import { inject, TestBed } from '@angular/core/testing';

import { BloggerService } from './blogger.service';

describe('BloggerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BloggerService,
            ],
        });
    });

    it('should ...', inject([BloggerService], (service: BloggerService) => {
        expect(service).toBeTruthy();
    }));
});
