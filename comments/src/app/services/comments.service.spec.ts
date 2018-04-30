import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CommentsService } from './comments.service';
import { MOCK_COMMENTS } from '../commons/mock.comments';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

describe('CommentsService', () => {
  let comment_service: CommentsService;
  const mock_data = MOCK_COMMENTS;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsService],
      imports: [HttpModule]
    });
    comment_service = TestBed.get(CommentsService);
  });

  it('should be created', inject([CommentsService], (service: CommentsService) => {
    expect(service).toBeTruthy();
  }));

  it('getAllComments in service should return all comments value from observable', () => {
    spyOn(comment_service, 'getAllComments').and.returnValue(Observable.of(MOCK_COMMENTS));
    (done: DoneFn) => {
      comment_service.getAllComments().subscribe(value => {
        expect(value).toBe(MOCK_COMMENTS);
        done();
      });
    }
  });

  it('getCommentById in service should return specific value from observable', () => {
    spyOn(comment_service, 'getCommentById').and.returnValue(Observable.of(MOCK_COMMENTS));
    (done: DoneFn) => {
      comment_service.getCommentById(MOCK_COMMENTS[1].id).subscribe(value => {
        expect(value).toBe(MOCK_COMMENTS[1]);
        done();
      });
    }
  });

  it('getCommentById in service should return 404 Error from observable when an item is not found', () => {
    spyOn(comment_service, 'getCommentById').and.returnValue(Observable.of(MOCK_COMMENTS));
    (done: DoneFn) => {
      comment_service.getCommentById(55).subscribe(value => {
        expect(value).toBe(404);
        done();
      });
    }
  });

});
