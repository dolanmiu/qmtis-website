import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
// qmtis?fields=engagement,fan_count,app_links,mission,events.limit(99999){attending_count} - get eventcount and fan count

@Injectable()
export class FacebookService {
    private heroesUrl = `https://graph.facebook.com/oauth/access_token?client_id=1811073865793293
        &client_secret=e7e692daa00561d8613062df66b2dafe&grant_type=client_credentials`;
    private photosUrl = 'https://graph.facebook.com/v2.8/qmtis/photos';
    private eventsUrl = 'https://graph.facebook.com/v2.8/qmtis/events';

    private authTokenObservable: Observable<any>;
    private authToken: string;

    constructor(private http: Http) {

    }

    private getAuthToken(): void {
        this.authTokenObservable = this.http.get(this.heroesUrl).map(authToken => {
            this.authToken = authToken.text();
        }).catch(this.handleError);
    }

    public getHeroes(): Observable<any> {
        return this.http.get(this.heroesUrl).flatMap(authToken => {
            return this.http.get(`${this.photosUrl}?${authToken.text()}&type=uploaded&limit=9`).map(photoJson => {
                return photoJson.json();
            }).catch(this.handleError);
        }).catch(this.handleError);
    }

    public getEvents(): Observable<any> {
        return this.http.get(this.heroesUrl).flatMap(authToken => {
            return this.http.get(`${this.eventsUrl}?${authToken.text()}&limit=4`).map(eventJson => {
                return eventJson.json();
            }).catch(this.handleError);
        }).catch(this.handleError);
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
