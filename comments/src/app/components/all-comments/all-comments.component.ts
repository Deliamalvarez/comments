import { Component, Input, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { TruncatePipe } from '../../commons/length.pipe';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: any[];

  constructor(private service: CommentsService) {

  }

  ngOnInit() {
    this.service.getAllComments().subscribe(comments => { this.comments = comments; });
  }


}
