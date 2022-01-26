BEGIN;


CREATE VIEW "users_bookings" AS
SELECT
    "user".id,
    ARRAY_AGG("booking".id) bookings
FROM "user"
    JOIN "booking" ON "booking".user_id="user".id
GROUP BY "user".id
ORDER BY "user".id;

CREATE VIEW "properties_has_images" AS
SELECT
    "property".id,
    ARRAY_AGG("property_image".url) images
FROM "property"
    JOIN "property_image" ON "property_image".property_id="property".id
GROUP BY "property".id
ORDER BY "property".id;

CREATE VIEW "properties_offers_vacancies" AS
SELECT
    "property".id,
    ARRAY_AGG("vacancy".id) vacancies
FROM "property"
    JOIN "vacancy" ON "vacancy".property_id="property".id
GROUP BY "property".id
ORDER BY "property".id;


CREATE VIEW "users" AS
SELECT DISTINCT
    "user".id,
    "user".username,
    "user".firstname,
    "user".lastname,
    "user".email,
    "user".created_at AS createdAt,
    "user".updated_at AS updatedAt,
    "users_bookings".bookings AS bookings
FROM "user"
   LEFT JOIN "users_bookings" ON "users_bookings".id = "user".id
ORDER BY "user".id ASC;

CREATE VIEW "properties" AS
SELECT DISTINCT
    "property".id,
    "property".name,
    "property".description,
    "property".capacity,
    "property".bedrooms_count AS bedroomsCount,
    "property".beds_count AS bedsCount,
    "property".bathrooms_count AS bathroomsCount,
    "property".type,
    "property". street_number AS streetNumber,
    "property".street_name AS streetName,
    "property".zip_code AS zipCode,
    "property".city,
    "property".country,
    "property".latitude,
    "property".longitude,
    "user".username AS host,
    "properties_has_images".images AS images,
    "properties_offers_vacancies".vacancies AS vacancies,
    "property".created_at AS createdAt,
    "property".updated_at AS updatedAt
FROM "property"
    JOIN "user" ON "user".id = "property".user_id
    JOIN "properties_has_images" ON "properties_has_images".id="property".id
    JOIN "properties_offers_vacancies" ON "properties_offers_vacancies".id="property".id
ORDER BY "property".created_at DESC;

COMMIT;