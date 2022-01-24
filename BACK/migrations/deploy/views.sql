-- Deploy orent:views to pg

BEGIN;

CREATE VIEW "users_bookings" AS
SELECT
    "user".id,
    ARRAY_AGG("booking".id) bookings
FROM "user"
    JOIN "booking" ON "booking".user_id="user".id
GROUP BY "user".id
ORDER BY "user".id

CREATE VIEW "users" AS
SELECT DISTINCT
    "user".id,
    "user".username,
    "user".firstname,
    "user".lastname,
    "user".email,
    "user".created_at,
    "user".updated_at,
    "users_bookings".bookings AS bookings
FROM "users"
    JOIN "users_bookings" ON "users_bookings".id = "user".id


COMMIT;
