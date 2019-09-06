const getUserTeams = (req, res) => {
  const db = req.app.get("db");
  db.get_userLegacyteam([req.body]).then(team => {
    res.status(200).json(team);
  });
};

const createTeam = (req, res) => {
  const { changeName } = req.body;
  const db = req.app.get("db");
  db.create_team([changeName]).then(() => {
    res.sendStatus(200);
  });
};

const deleteTeam = (req, res) => {
  const { id } = req.params;
  const db = req.app.get("db");
  db.delete_team(id).then(() => res.sendStatus(200));
};

module.exports = {
  getUserTeams,
  createTeam,
  deleteTeam
};
