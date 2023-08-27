const { findBookById, getAllBooks } = require("./DB");
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
  Book: {
    author: async (parent, args) => {
      const response = await getAllAuthors();
      return response.find((author) => author.id === parent.authorid);
    },
  },
};

module.exports = BookResolver;
