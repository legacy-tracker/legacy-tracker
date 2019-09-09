INSERT INTO legacy_team
(team_name, username)
VALUES
($1, $2);

SELECT legacy_team.* from legacy_team
INNER JOIN legacy_user ON legacy_team.username = legacy_user.username
WHERE legacy_user.username = $2
ORDER BY legacy_team.team_id DESC 
LIMIT 1 