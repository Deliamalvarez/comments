import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCommentComponent } from './detailed-comment.component';

describe('DetailedCommentComponent', () => {
  let component: DetailedCommentComponent;
  let fixture: ComponentFixture<DetailedCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedCommentComponent ]
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
