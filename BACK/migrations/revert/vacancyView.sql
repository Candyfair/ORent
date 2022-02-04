-- Revert orent:vacancyView from pg

BEGIN;

DROP VIEW vacancies;

COMMIT;
