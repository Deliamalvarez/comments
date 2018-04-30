import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { CommentsService } from '../../services/comments.service';
import { DetailedCommentComponent } from './detailed-comment.component';

describe('DetailedCommentComponent', () => {
  let component: DetailedCommentComponent;
  let fixture: ComponentFixture<DetailedCommentComponent>;
  let commentService: CommentsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedCommentComponent],
      imports: [RouterTestingModule, CommonModule, HttpModule],
      providers: [CommentsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
