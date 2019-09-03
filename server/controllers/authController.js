const bcrypt = require("bcryptjs");

module.exports = {
  register: async function(req, res) {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const response = await db.check_user([email]);
    console.log(+response[0].count);
    if (+response[0].count > 0) {
      res.staus(406).json({
        error: "Username Taken"
      });
    } else {
      const hash = await bcrypt.hash(password, 10);
      await db.create_user(email, hash);
      req.session.user = {
        email
      };
      res.status(200).json(req.session.user);
    }
  }
};
