import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const URL = `https://wt-9017166451e5dc00461b648d19f5e8da-0.sandbox.auth0-extend.com/qmtis-facebook`;

interface FacebookResponse {
    photos: FacebookPhotosResponse;
    events: FacebookEventResponse;
}

@Injectable()
export class FacebookService {
    private readonly data$: Observable<FacebookResponse>;

    constructor(private http: Http) {
        this.data$ = this.http.get(URL).map((eventJson) => {
            return eventJson.json() as FacebookResponse;
        });
    }

    public getPhotos(): Observable<FacebookPhotosResponse> {
        return this.data$.map((response) => response.photos);
    }

    public getEvents(): Observable<FacebookEventResponse> {
        return this.data$.map((response) => response.events);
    }
}
