require("dotenv").config();
const express = require("express");
const massive = require("massive");

const { CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

app.listen(SERVER_PORT, () => console.log(`Listen on ${SERVER_PORT}`));
