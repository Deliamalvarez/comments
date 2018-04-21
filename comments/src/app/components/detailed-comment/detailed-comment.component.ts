import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-detailed-comment',
  templateUrl: './detailed-comment.component.html',
  styleUrls: ['./detailed-comment.component.css']
})
export class DetailedCommentComponent implements OnInit {

  comment: any;
  private id: number;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: CommentsService) {
     this.id = +activatedRoute.snapshot.params.id;
     this.comment = service.getById(this.id);
   }

  ngOnInit() {
  }

  onClickButtonBack(){
    this.router.navigate(['/']);
  }

}
