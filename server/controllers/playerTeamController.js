const getUserTeams = (req, res) => {
  const db = req.app.get("db");
  db.get_userLegacyteam([req.body]).then(team => {
    console.log("hello", req);
    console.log(team);
    res.status(200).json(team);
  });
};

const createTeam = (req, res) => {
  const { name, username } = req.body;
  const db = req.app.get("db");
  db.create_team([name, username])
    .then(() => {
      console.log(req.body);
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
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
