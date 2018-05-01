import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { CommentsService } from '../../services/comments.service';
import { DetailedCommentComponent } from './detailed-comment.component';
import { MOCK_COMMENTS } from '../../commons/mock.comments';
import { Observable } from 'rxjs/Observable';

describe('DetailedCommentComponent', () => {
  let component: DetailedCommentComponent;
  let fixture: ComponentFixture<DetailedCommentComponent>;
  const mockCommentService = {
    getCommentById: () => {
      return Observable.of(MOCK_COMMENTS[0]);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedCommentComponent],
      imports: [RouterTestingModule, CommonModule, HttpClientModule],
      providers: [{ provide: CommentsService, useValue: mockCommentService }]
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
  it('should have comment detail to load', () => {
    expect(component.comment).toEqual(MOCK_COMMENTS[0]);
  });
});
