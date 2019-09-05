const getUserTeams = (req, res) => {
  const db = req.app.get("db");
  db.get_userLegacyteam([req.body]).then(userteam => {
    res.status(200).json(team);
  });
};

const createTeam = (req, res) => {
  const { teamName } = req.body;
  const db = req.app.get("db");
  db.add_team([teamName]).then(() => {
    res.sendStatus(200);
  });
};

const deleteTeam = (req, res) => {
  const { id } = req.params;
  const db = req.app.get("db");
  db.delete_team(id).then(() => res.sendStatus(200));
};

module.export = {
  getUserTeams,
  createTeam,
  deleteTeam
};
