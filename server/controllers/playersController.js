const addPlayer = (req, res) => {
  const { id, name, teamAbbr, position, teamId } = req.body;
  const db = req.app.get("db");
  db.add_player([id, name, teamAbbr, position, teamId]).then(() => {
    res.sendStatus(200);
  });
};

const getPlayers = async (req, res) => {
  const { id } = req.params;

  let data = await req.app.get("db").get_legacyTeamPlayers(id);
  return res.status(200).json(data);
};

module.exports = {
  addPlayer,
  getPlayers
};
