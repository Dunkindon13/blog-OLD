import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './view/main/posts/posts.component';
import { StubPipe } from './controller/pipes/stub.pipe';
import { PostComponent } from './view/main/post/post.component';
import { NotFoundComponent } from './view/main/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    StubPipe,
    PostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
