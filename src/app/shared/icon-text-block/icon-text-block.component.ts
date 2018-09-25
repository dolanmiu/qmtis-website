import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-icon-text-block',
    templateUrl: './icon-text-block.component.html',
    styleUrls: ['./icon-text-block.component.scss'],
})
export class IconTextBlockComponent {
    @Input()
    public title: string;
    @Input()
    public description: string;
    @Input()
    public icon: string;
}
