import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { CommentsService } from './comments.service';

describe('CommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([CommentsService], (service: CommentsService) => {
    expect(service).toBeTruthy();
  }));
});
