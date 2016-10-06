import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-text-block',
    templateUrl: './icon-text-block.component.html',
    styleUrls: ['./icon-text-block.component.scss']
})
export class IconTextBlockComponent {
    @Input() title: string;
    @Input() description: string;
    @Input() icon: string;
}
