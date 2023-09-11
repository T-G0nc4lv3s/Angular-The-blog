export class BlogNews {
  id: String | null;
  imgUrl: String;
  title: String;
  description: String | null;
  constructor(
    id: String,
    imgUrl: String,
    title: String,
    description: String | null
  ) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.title = title;
    this.description = description;
  }
}
