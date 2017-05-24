import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
// qmtis?fields=engagement,fan_count,app_links,mission,events.limit(99999){attending_count} - get eventcount and fan count

const PHOTOS_URL = 'https://graph.facebook.com/v2.8/qmtis/photos';
const EVENTS_URL = 'https://graph.facebook.com/v2.8/qmtis/events';
const OAUTH_URL = `https://graph.facebook.com/oauth/access_token?client_id=1811073865793293&client_secret=6ea0510253eb7bf717b7816706913a34&grant_type=client_credentials`;

interface FaceboothOAuthResponse {
    access_token: string;
    token_type: string;
}

@Injectable()
export class FacebookService {
    private authTokenObservable: Observable<any>;

    constructor(private http: Http) {

    }

    public getPhotos(): Observable<any> {
        return this.getAuthToken().flatMap(authToken => {
            return this.http.get(`${PHOTOS_URL}?access_token=${authToken.access_token}&type=uploaded&limit=9`).map(photoJson => {
                return photoJson.json();
            }).catch(this.handleError);
        }).catch(this.handleError);
    }

    public getEvents(): Observable<any> {
        return this.getAuthToken().flatMap(authToken => {
            return this.http.get(`${EVENTS_URL}?access_token=${authToken.access_token}&limit=4`).map(eventJson => {
                return eventJson.json();
            }).catch(this.handleError);
        }).catch(this.handleError);
    }

    private getAuthToken(): Observable<FaceboothOAuthResponse> {
        if (this.authTokenObservable) {
            return this.authTokenObservable;
        }

        this.authTokenObservable = this.http.get(OAUTH_URL).map(response => response.json()).catch(this.handleError);
        return this.authTokenObservable;
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
