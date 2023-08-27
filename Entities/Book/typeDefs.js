const BookTypeDef = `
  type Book {
    id: ID!,
    name: String!,
    genre: String!,
    authorid: String!
    author: Author
  },
  type Query {
    books: [Book],
    book(id:ID): Book
  }
  type Mutation {
    addBook(id: String!, name: String!, genre: String!, authorid: String!): String
  }
`;

module.exports = BookTypeDef;
