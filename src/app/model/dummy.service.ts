import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  posts = [
    new Post({
      id: 0,
      title: 'What a piece of work is man!',
      author: 'Hamlet',
      // tslint:disable-next-line:max-line-length
      body: 'I have of late.'
    }),
    new Post({
      id: 1,
      title: 'To be or not to be',
      author: 'Hamlet',
      body: 'To be, or not to be, that is the question:\n' +
        'Whether \'tis nobler in the mind to suffer\n' +
        'The slings and arrows of outrageous fortune'
    }),
    new Post({
      id: 2,
      title: 'Queen Mab',
      author: 'Mercutio',
      body: 'O, then I see Queen Mab hath been with you.\n' +
        'She is the fairies\' midwife, and she comes\n' +
        'In shape no bigger than an agate stone\n' +
        'On the forefinger of an alderman,\n' +
        'Drawn with a team of little atomies'
    })
    // new Post(title: 'This is the second post.')
  ];

  constructor() {
  }

  getAllPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPostById(id): Observable<Post> {
    return of(this.posts[id]);
  }
}
