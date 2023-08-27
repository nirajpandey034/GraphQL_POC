const express = require("express");
require("dotenv").config();
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const { makeExecutableSchema } = require("graphql-tools");
const app = express();
const BookTypeDef = require("./Entities/Book/typeDefs");
const BookResolver = require("./Entities/Book/resolver");
const AuthorTypeDef = require("./Entities/Author/typeDefs");
const AuthorResolver = require("./Entities/Author/resolver");

const resolvers = Object.assign({}, BookResolver, AuthorResolver, {
  Query: { ...BookResolver.Query, ...AuthorResolver.Query },
  // Mutation: Object.assign(
  //   {},
  //   BookResolver.Mutation,
  //   productResolver.Mutation
  // ),
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: makeExecutableSchema({
      typeDefs: [BookTypeDef, AuthorTypeDef],
      resolvers,
    }),
    graphiql: true,
  })
);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started at ${process.env.APP_PORT}`);
});
