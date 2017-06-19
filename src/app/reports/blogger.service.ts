import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../environments/environment';

interface BloggerResult {
    blog: Blog;
    posts: Posts;
}

@Injectable()
export class BloggerService {

    constructor(private http: Http) { }

    public blog(): Observable<BloggerResult> {
        const blogUrl = `https://www.googleapis.com/blogger/v3/blogs/${environment.blogger.id}?key=${environment.blogger.apiKey}`;
        const postsUrl = `https://www.googleapis.com/blogger/v3/blogs/${environment.blogger.id}/posts?key=${environment.blogger.apiKey}`;

        return this.http.get(blogUrl).map((blog) => blog.json() as Blog).flatMap((blog) => {
            return this.http.get(postsUrl).map((posts) => {
                return {
                    blog: blog,
                    posts: posts.json() as Posts,
                };
            });
        });
    }

}
