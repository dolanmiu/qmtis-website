import { Component } from '@angular/core';
import { FacebookService } from './fb-photos.service';

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

        this.facebookService.getHeroes().subscribe(
            photos => {
                this.photos = photos.data;
            },
            err => {
            });
    }
}
