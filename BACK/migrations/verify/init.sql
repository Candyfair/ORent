-- Verify orent:init on pg

BEGIN;

SELECT * FROM "user" WHERE false;
SELECT * FROM "property" WHERE false;
SELECT * FROM "property_image" WHERE false;
SELECT * FROM "vacancy" WHERE false;
SELECT * FROM "booking" WHERE false;

ROLLBACK;
