import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class FacebookService {
    private heroesUrl = `https://graph.facebook.com/oauth/access_token?client_id=1811073865793293
        &client_secret=e7e692daa00561d8613062df66b2dafe&grant_type=client_credentials`;
    private photosUrl = 'https://graph.facebook.com/v2.7/qmtis/photos';

    constructor(private http: Http) {

    }

    public getHeroes(): Observable<any> {
        return this.http.get(this.heroesUrl).flatMap(authToken => {
            return this.http.get(`${this.photosUrl}?${authToken.text()}&type=uploaded&limit=9`).map(photoJson => {
                return photoJson.json();
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
