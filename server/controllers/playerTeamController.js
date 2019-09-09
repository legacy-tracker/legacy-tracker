const getUserTeams = (req, res) => {
  const db = req.app.get("db");
  db.get_userLegacyteam([req.params.id]).then(team => {
    res.status(200).json(team);
  });
};

const createTeam = async (req, res) => {
  const { name } = req.body;
  const { username } = req.session.user;

  const team = await req.app.get("db").create_team([name, username]);

  return res.status(200).json(team);
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
