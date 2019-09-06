SELECT player_team.* FROM player_team
INNER JOIN legacy_team ON player_team.team_id = legacy_team.team_id
WHERE legacy_team.team_id = $1