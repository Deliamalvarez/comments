import { Component, Input } from '@angular/core';

import {TruncatePipe} from '../../commons/length.pipe';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent {

  comments: any[];
  
    constructor(private service: CommentsService) {
      
     }
  
    ngOnInit() {
      this.service
        .getAll()
        .subscribe(comments => { this.comments = comments });
    }


}
