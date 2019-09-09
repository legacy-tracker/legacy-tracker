const bcrypt = require("bcryptjs");

module.exports = {
  register: async function(req, res) {
    const { firstName, lastName, username, password } = req.body;
    const db = req.app.get("db");
    const response = await db
      .check_user([username])
      .catch(err => console.log(err));
    console.log(+response[0].count);
    if (+response[0].count > 0) {
      res.staus(406).json({
        error: "Username Taken"
      });
    } else {
      const hash = await bcrypt.hash(password, 10);
      await db.create_user(firstName, lastName, username, hash);
      req.session.user = {
        username
      };
      res.status(200).json(req.session.user);
    }
  },
  login: async function(req, res) {
    const db = req.app.get("db");

    const { username, password } = req.body;
    const info = await db.get_user(username).catch(err => console.log(err));
    console.log(info[0].password);
    const isCorrect = await bcrypt.compare(password, info[0].password);

    if (isCorrect === true) {
      req.session.user = {
        username
      };
      res.status(200).json(req.session.user);
    } else {
      res.status(401).json({
        error: "Incorrect Username or password"
      });
    }
  },
  logout: async function(req, res) {
    req.session.destroy();
    return res.sendStatus(400);
  }
};
