declare interface Post {
    kind: string;
    id: string;
    blog: {
        id: string;
    };
    published: string;
    updated: string;
    etag: string;
    url: string;
    selfLink: string;
    title: string;
    content: string;
    author: {
        id: string;
        displayName: string;
        url: string;
        image: {
            url: string;
        };
    };
    replies: {
        totalItems: number;
        selfLink: string;
    };
}

declare interface Posts {
    kind: string;
    items: Post[];
    etag: string;
}
