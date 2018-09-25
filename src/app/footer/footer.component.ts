import { Component } from '@angular/core';
import { FacebookService } from '../shared/fb.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
    public year: number;
    public photos: FacebookPhoto[];

    constructor(facebookService: FacebookService) {
        this.year = new Date().getFullYear();

        facebookService.getPhotos().subscribe(
            (photos) => {
                this.photos = photos.data;
            },
            (err) => {
                console.error(err);
            },
        );
    }
}
