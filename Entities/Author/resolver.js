const { findAuthorByName, getAllAuthors } = require("./DB");
const { getAllBooks } = require("../Book/DB");
const AuthorResolver = {
  Query: {
    authors: async (parent, args) => {
      const response = await getAllAuthors();
      return response;
    },
    author: async (parent, args) => {
      const response = await findAuthorByName(args.name);
      return response;
    },
  },
  Author: {
    books: async (parent, args) => {
      const response = await getAllBooks();
      const data = response.filter((book) => book.authorid === parent.id);
      return data;
    },
  },
};

module.exports = AuthorResolver;
