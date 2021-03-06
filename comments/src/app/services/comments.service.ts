import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BadInput } from '../commons/bad-input';
import { NotFoundError } from '../commons/not-found.error';
import { AppError } from '../commons/app.errors';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/share';


const example_uri = 'http://jsonplaceholder.typicode.com/posts/1/comments';

/**
 * The services consume once the url to get the comment json
 * then it shares the comments as an observable to getComments() and getCommentById
 */
@Injectable()
export class CommentsService {
  private comments$: Observable<any>;
  constructor(private http: HttpClient) {
    this.comments$ = this.getComments().share();
  }

  private getComments(): Observable<any> {
    return this.http.get(example_uri)
      .map(response => response)
      .catch(this.handleError);
  }
  getAllComments() {
    return this.comments$;
  }

  getCommentById(id): Observable<any> {
    return this.comments$.map(comments => comments.find(c => c.id === id));
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404) {
      return Observable.throw(new NotFoundError());
    }
    return Observable.throw(new AppError(error));
  }

}
