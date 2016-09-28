interface Member {
    name: string;
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
                name: 'Pattawia Supradit',
                description: 'Student at Queen Mary University of London with Excellence Scholarship',
                facebook: 'https://www.facebook.com/pattawias',
                linkedIn: 'https://www.linkedin.com/in/pattawia-supradit-249b98104',
                photoUrl: './assets/pattawia.jpg'
            }
        ];

        members.forEach(member => {
            this.push(member);
        });
    }
}
