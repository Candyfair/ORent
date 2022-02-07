-- Deploy orent:vacancyView to pg

BEGIN;

CREATE VIEW "vacancies" AS
SELECT DISTINCT
    "vacancy".id,
    "vacancy".start_date AS startDate,
    "vacancy".end_date AS endDate,
    "vacancy".booked AS booked,
    "vacancy".property_id AS propertyId,
    "vacancy".created_at AS createdAt
FROM "vacancy"
ORDER BY "vacancy".created_at DESC;

COMMIT;
