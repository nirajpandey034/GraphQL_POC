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
`;

module.exports = BookTypeDef;
