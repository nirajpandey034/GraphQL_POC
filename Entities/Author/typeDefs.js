const AuthorTypeDef = `
  type Author {
    id: ID!,
    name: String!,
    age: Int!
    books: [Book!]
  },
  type Query {
    authors: [Author],
    author(name:String): Author
  }
`;

module.exports = AuthorTypeDef;
