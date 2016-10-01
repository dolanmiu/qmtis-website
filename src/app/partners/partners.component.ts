import { Component } from '@angular/core';

class Partner {
    link: string;
    name: string;
}

@Component({
    selector: 'app-partners',
    templateUrl: './partners.component.html',
    styleUrls: ['./partners.component.scss', '../shared/section.component.scss'],
})
export class PartnersComponent {
    partners: Array<Partner> = [
        {
            link: 'baml-logo.png',
            name: 'Bank of America Merrill Lynch'
        },
        {
            link: 'blackrock-logo.png',
            name: 'Black Rock'
        },
        {
            link: 'bloomberg-logo.png',
            name: 'Bloomberg'
        },
        {
            link: 'boe-logo.png',
            name: 'Bank of England'
        },
        {
            link: 'ey-logo.png',
            name: 'Ernest and Young'
        },
        {
            link: 'galbraiths-logo.png',
            name: 'Galbraiths'
        },
        {
            link: 'goldman-sachs-logo.png',
            name: 'Goldman Sachs'
        },
        {
            link: 'hsbc-logo.png',
            name: 'HSBC'
        },
        {
            link: 'jp-morgan-logo.png',
            name: 'JP Morgan'
        },
        {
            link: 'morgan-stanley-logo.png',
            name: 'Morgan Stanley'
        },
        {
            link: 'shell-logo.png',
            name: 'Shell'
        },
        {
            link: 'thomson-reuters-logo.png',
            name: 'Thomson Reuters'
        },
        {
            link: 'seedrs-logo.png',
            name: 'Seedrs'
        }
    ];
}
