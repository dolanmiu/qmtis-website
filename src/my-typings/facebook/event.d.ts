declare interface FacebookEvent {
    name: string;
    place: {
        location: {
            latitude: number,
            longitude: number,
            street: string,
            zip: string,
        },
        name: string;
    };
    description: string;
    start_time: string;
    id: string;
}
