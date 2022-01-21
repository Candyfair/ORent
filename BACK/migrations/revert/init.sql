-- Revert orent:init from pg

BEGIN;

DROP TABLE "booking";
DROP TABLE "property_image";
DROP TABLE "vacancy";
DROP TABLE "property";
DROP TABLE "user";

DROP DOMAIN posint;


COMMIT;
