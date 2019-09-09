const addPlayer = (req, res) => {
  const { id, name, teamAbbr, position, teamId } = req.body;
  const db = req.app.get("db");
  db.add_player([id, name, teamAbbr, position, teamId]).then(() => {
    res.sendStatus(200);
  });
};

module.exports = {
  addPlayer
};
