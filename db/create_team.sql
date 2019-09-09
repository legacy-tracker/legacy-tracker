INSERT INTO legacy_team
(team_name, username)
VALUES
($1, $2);

SELECT legacy_team.team_id 
FROM legacy_team
JOIN legacy_user ON legacy_user.username = legacy_team.username
WHERE legacy_user.username = $2