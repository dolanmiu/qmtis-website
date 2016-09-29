// qmtis/photos?type=uploaded
// https://graph.facebook.com/v2.7/qmtis/photos?access_token=1811073865793293%7Cwxow4YvIHqgwZrFY4Qfwnz8QCoQ&type=uploaded
// http://graph.facebook.com/67563683055/picture?type=album
// https://graph.facebook.com/oauth/access_token?client_id=1811073865793293&client_secret=e7e692daa00561d8613062df66b2dafe&grant_type=client_credentials
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

class Photo {

}

@Injectable()
export class FacebookPhotos {
    private heroesUrl = 'app/heroes';  // URL to web API

    constructor(private http: Http) {

    }

    public getHeroes(): Observable<Photo[]> {
        return this.http.get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
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
