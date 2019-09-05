SELECT legacy_team.* from legacy_team
INNER JOIN legacy_user on legacy_team.user_id = legacy_user.user_id
WHERE legacy_user.user_id = $1

