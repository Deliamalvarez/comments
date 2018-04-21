import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import {DataService} from './data.service';

const example_uri = "http://jsonplaceholder.typicode.com/posts/1/comments";

@Injectable()
export class CommentsService extends DataService {

  constructor(http: Http) { 
    super(example_uri, http);
  }

}
