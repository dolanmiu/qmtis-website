import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-fb-photo',
    templateUrl: './fb-photo.component.html',
    styleUrls: ['./fb-photo.component.scss'],
})
export class FacebookPhotoComponent {
    @Input() public url: string;
}
