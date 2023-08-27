const { findBookById, getAllBooks, addBook } = require("./DB");
const { getAllAuthors } = require("../Author/DB");
const BookResolver = {
  Query: {
    books: async (parent, args) => {
      const response = await getAllBooks();
      return response;
    },
    book: async (parent, args) => {
      const response = await findBookById(args.id);
      return response;
    },
  },
  Mutation: {
    addBook: async (parent, args) => {
      const response = await addBook({
        id: args.id,
        name: args.name,
        genre: args.genre,
        authorid: args.authorid,
      });
      return "Success";
    },
  },
  Book: {
    author: async (parent, args) => {
      const response = await getAllAuthors();
      return response.find((author) => author.id === parent.authorid);
    },
  },
};

module.exports = BookResolver;
