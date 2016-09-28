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
                description: 'dfs',
                facebook: 'sdf',
                linkedIn: 'sdf',
                photoUrl: 'f'
            }
        ];

        members.forEach(member => {
            this.push(member);
        });
    }
}
