-- Verify orent:views on pg

BEGIN;

SELECT * FROM "users" WHERE false;
SELECT * FROM "properties" WHERE false;
SELECT * FROM "properties_offers_vacancies" WHERE false;
SELECT * FROM "properties_has_images" WHERE false;
SELECT * FROM "users_bookings" WHERE false;

ROLLBACK;
