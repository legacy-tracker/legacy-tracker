require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { register, login, logout } = require("./controllers/authController");
const {
  getUserTeams,
  createTeam,
  deleteTeam
} = require("./controllers/playerTeamController");
const { addPlayer } = require("./controllers/playersController");
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

// app.use((req, res, next) => {
//   if (req.session.user) return next();
//   else res.sendStatus(401);
// });
app.get("/api/user", function(req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(400).json("User logged in");
  }
});

// user teams

app.get("/api/team/:id", getUserTeams);
app.post("/api/team", createTeam);
app.delete("/api/team/:id");

//user players
app.post("/api/userPlayers", addPlayer);

app.listen(SERVER_PORT, () => console.log(`Listen on ${SERVER_PORT}`));
