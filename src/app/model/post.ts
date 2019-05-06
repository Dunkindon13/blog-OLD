export class Post {
  id: number;
  title: string;
  body: string;
  author: string;
  created: Date;

  constructor(args?) {
    if (args) {
      this.id = args.id;
      this.title = args.title;
      this.body = args.body;
      this.author = args.author;
      this.created = (args.created) ? args.created : new Date();
    }
  }
}
