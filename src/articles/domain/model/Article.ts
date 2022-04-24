import Author from "./Author";

interface ArticleId {
  id: string;
}

interface ArticleId {
  id: string;
}

interface ArticleTitle {
  id: string;
}

interface ArticleContent {
  id: string;
}

class Article {
  private id: ArticleId;
  private title: ArticleTitle;
  private content: ArticleContent;
  private author: Author;

  public constructor(id: ArticleId, title: ArticleTitle, content: ArticleContent, author: Author ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
  }

}

export default Article;
