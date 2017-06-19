declare interface Blog {
    kind: string;
    id: string;
    name: string;
    description: string;
    published: string;
    updated: string;
    url: string;
    selfLink: string;
    posts: {
        totalItems: number,
        selfLink: string
    };
    pages: {
        totalItems: number,
        selfLink: string
    };
    locale: {
        language: string,
        country: string,
        variant: string
    }
}
