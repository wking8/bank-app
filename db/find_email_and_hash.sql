select * from user_info
JOIN credentials on credentials.user_id = user_info.user_id
where email = $1;