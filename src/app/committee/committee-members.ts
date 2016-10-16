interface Member {
    name: string;
    position: string;
    photoUrl: string;
    facebook?: string;
    linkedIn?: string;
}

export class Members extends Array<Member> {

    constructor() {
        super();
        let members: Array<Member>;
        members = [
            {
                name: 'Ioannis Karagiannakis',
                position: 'President',
                facebook: 'https://www.facebook.com/giannis.karagiannakis.9',
                linkedIn: 'https://www.linkedin.com/in/ioannis-karagiannakis-50161188',
                photoUrl: 'ioannis.jpg'
            },
            {
                name: 'Christian Hirsekorn',
                position: 'Treasurer',
                facebook: 'https://www.facebook.com/Partytempel?fref=ts',
                linkedIn: 'https://www.linkedin.com/in/christian-hirsekorn-83398010a/en',
                photoUrl: 'chris.jpg'
            },
            {
                name: 'Pattawia Supradit',
                position: 'Secretary',
                facebook: 'https://www.facebook.com/pattawias',
                linkedIn: 'https://www.linkedin.com/in/pattawia-supradit-249b98104',
                photoUrl: 'pattawia.jpg'
            }
        ];

        members.forEach(member => {
            this.push(member);
        });
    }
}
