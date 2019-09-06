const addPlayer = (req, res) => {
  const { playerId, playerName, playerTeam, playerPosition, teamId } = req.body;
  const db = req.app.get("db");
  db.add_player([
    playerId,
    playerName,
    playerTeam,
    playerPosition,
    teamId
  ]).then(() => {
    res.sendStatus(200);
  });
};

module.exports = {
  addPlayer
};
