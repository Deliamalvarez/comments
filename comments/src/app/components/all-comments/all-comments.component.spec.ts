import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { AllCommentsComponent } from './all-comments.component';
import { TruncatePipe } from '../../commons/length.pipe';
import { CommentsService } from '../../services/comments.service';

describe('AllCommentsComponent', () => {
  let component: AllCommentsComponent;
  let fixture: ComponentFixture<AllCommentsComponent>;
  let commentService: CommentsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllCommentsComponent, TruncatePipe],
      imports: [RouterTestingModule, CommonModule, HttpModule],
      providers: [CommentsService]
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
});
