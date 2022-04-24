interface AuthorId {
  id: string;
}

interface PersonName {
  name: string;
}

class Author {
  private id: AuthorId;
  private name: PersonName;

  public constructor(id: AuthorId, name: PersonName) {
    this.id = id;
    this.name = name;
  }
}

export default Author;
