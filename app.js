const express = require("express");
require("dotenv").config();
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const app = express();
const pool = require("./config/database");

const schema = require("./schema/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(process.env.APP_PORT, () => {
  console.log("Server started at 3000");
});
