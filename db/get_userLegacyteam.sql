SELECT legacy_team.* from legacy_team
INNER JOIN legacy_user ON legacy_team.username = legacy_user.username
WHERE legacy_user.username = $1
