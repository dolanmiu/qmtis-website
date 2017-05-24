import { Component } from '@angular/core';
import { FacebookService } from '../shared/fb.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    providers: [FacebookService]
})
export class FooterComponent {
    year: number;
    photos: Array<any>;

    constructor(private facebookService: FacebookService) {
        this.year = new Date().getFullYear();

        this.facebookService.getPhotos().subscribe(
            photos => {
                this.photos = photos.data;
            }, (err) => {
                console.error(err);
            });
    }
}
