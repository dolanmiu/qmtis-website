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
                linkedIn: 'https://www.linkedin.com/in/ioanniskaragiannakis',
                photoUrl: 'ioannis.jpg'
            },
            {
                name: 'Christian Hirsekorn',
                position: 'Treasurer',
                facebook: 'https://www.facebook.com/Partytempel',
                linkedIn: 'https://www.linkedin.com/in/christian-hirsekorn-83398010a/en',
                photoUrl: 'chris.jpg'
            },
            {
                name: 'Pattawia Supradit',
                position: 'Secretary',
                facebook: 'https://www.facebook.com/pattawias',
                linkedIn: 'https://www.linkedin.com/in/pattawia-supradit-249b98104',
                photoUrl: 'pattawia.jpg'
            },
            {
                name: 'Nelson Yao',
                position: 'Head of Marco Research',
                facebook: 'https://www.facebook.com/nelson.yao.9',
                linkedIn: 'https://www.linkedin.com/in/nelson-yao-02701aa6',
                photoUrl: 'nelson.jpg'
            },
            {
                name: 'Ryan Gumbrell',
                position: 'Head of Equities',
                facebook: 'https://www.facebook.com/RL.Gumbrell',
                linkedIn: 'https://www.linkedin.com/in/ryangumbrell',
                photoUrl: 'ryan.jpg'
            },
            {
                name: 'Sadiq Yesufu',
                position: 'Head of FX',
                facebook: 'https://www.facebook.com/profile.php?id=100009007857270',
                linkedIn: 'https://www.linkedin.com/in/sadiq-yesufu-3517a2b8',
                photoUrl: 'sadiq.jpg'
            },
            {
                name: 'Mike Vorozeykin',
                position: 'Head of Operations',
                facebook: 'https://www.facebook.com/mijail.vorozeykin',
                linkedIn: 'https://www.linkedin.com/in/mike-vorozheykin-22900ba9',
                photoUrl: 'mike.jpg'
            }
        ];

        members.forEach(member => {
            this.push(member);
        });
    }
}
