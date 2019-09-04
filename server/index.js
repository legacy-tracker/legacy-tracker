require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { register, login, logout } = require("./controllers/authController");
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

const app = express();
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected");
});

// auth endpoint
app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/logout", logout);
app.get("/api/user", function(req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(400).json("User logged in");
  }
});

app.listen(SERVER_PORT, () => console.log(`Listen on ${SERVER_PORT}`));

//user
