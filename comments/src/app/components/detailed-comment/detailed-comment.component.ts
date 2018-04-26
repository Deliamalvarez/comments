import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-detailed-comment',
  templateUrl: './detailed-comment.component.html',
  // styleUrls: ['./detailed-comment.component.css']
})

export class DetailedCommentComponent implements OnInit {

  comment: any;
  private id: number;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: CommentsService) {
    this.id = +activatedRoute.snapshot.params.id;
  }

  ngOnInit() {
    this.service.getCommentById(this.id).subscribe(c => this.comment = c);
  }

  onClickButtonBack() {
    this.router.navigate(['/']);
  }

}
