import { by } from 'protractor';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AllCommentsComponent } from './all-comments.component';
import { TruncatePipe } from '../../commons/length.pipe';
import { CommentsService } from '../../services/comments.service';
import { MOCK_COMMENTS } from '../../commons/mock.comments';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

describe('AllCommentsComponent', () => {
  let component: AllCommentsComponent;
  let fixture: ComponentFixture<AllCommentsComponent>;
  let mockCommentService = {
    getAllComments: () => {
      return Observable.of(MOCK_COMMENTS);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllCommentsComponent, TruncatePipe],
      imports: [RouterTestingModule, CommonModule, HttpModule],
      providers: [{ provide: CommentsService, useValue: mockCommentService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have comments to load', () => {
    expect(component.comments).toEqual(MOCK_COMMENTS);
  });

  it('should render title in h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Comments summary list');
  }));

  it('should display all mock coments li items', function() {
    const compiled = fixture.debugElement.nativeElement;
    let liCount = compiled.querySelectorAll('li').length;
    expect(liCount).toBe(MOCK_COMMENTS.length);
  });
});
