SELECT password, first_name, last_name
FROM legacy_user
WHERE username = $1;