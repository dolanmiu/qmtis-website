interface Member {
    name: string;
    position: string;
    description: string;
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
                description: `Sexy Greek 20 year-old man, highly intelligent and sophisticated, 
                    but slightly overweight, looking for classy and educated woman with similar ambitions`,
                facebook: 'https://www.facebook.com/giannis.karagiannakis.9',
                linkedIn: 'https://www.linkedin.com/in/ioannis-karagiannakis-50161188',
                photoUrl: 'ioannis.jpg'
            },
            {
                name: 'Christian Hirsekorn',
                position: 'Treasurer',
                description: 'Sexy German',
                facebook: 'https://www.facebook.com/Partytempel?fref=ts',
                linkedIn: 'https://www.linkedin.com/in/christian-hirsekorn-83398010a/en',
                photoUrl: 'chris.jpg'
            },
            {
                name: 'Pattawia Supradit',
                position: 'Secretary',
                description: `Economics and Finance student with industry experience in the Ministry of 
                Finance (MoF), Royal Thai Embassy, Sales and Trading Summer analyst at BNP Paribas and Financial 
                Institutions Coverage (FIC) at BNP Paribas`,
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
