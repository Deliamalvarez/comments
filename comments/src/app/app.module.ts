import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { DetailedCommentComponent } from './components/detailed-comment/detailed-comment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommentsService } from './services/comments.service';
import { TruncatePipe } from './commons/length.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AllCommentsComponent,
    DetailedCommentComponent,
    NotFoundComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '',  component: AllCommentsComponent },
      { path: 'comments', component: AllCommentsComponent },
      { path: 'detail/:id', component: DetailedCommentComponent },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
