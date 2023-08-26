const graphql = require("graphql");
const { findBookById, getAllBooks } = require("../Queries/Books");
const { findAuthorByName, getAllAuthors } = require("../Queries/Authors");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      async resolve(parent, args) {
        const response = await getAllAuthors();
        return response.filter(
          (author) => String(author.id) === String(parent.authorid)
        )[0];
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    age: { type: GraphQLInt },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      async resolve(parent, args) {
        const response = await getAllBooks();
        return response.filter(
          (book) => String(book.authorid) === String(parent.id)
        );
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const response = await findBookById(args.id);
        return response;
      },
    },
    books: {
      type: new GraphQLList(BookType),
      async resolve(parent, args) {
        const response = await getAllBooks();
        return response;
      },
    },
    author: {
      type: AuthorType,
      args: { name: { type: GraphQLString } },
      async resolve(parent, args) {
        const response = await findAuthorByName(args.name);
        return response;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      async resolve(parent, args) {
        const response = await getAllAuthors(args.name);
        return response;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
