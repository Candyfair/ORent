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
    "property".slug,
    "property".week_price AS weekPrice,
    "user".username AS host,
    "user".email AS hostEmail,
    "property".user_id AS host_id,
    "properties_has_images".images AS images,
    "properties_offers_vacancies".vacancies AS vacancies,
    "property".created_at AS createdAt,
    "property".updated_at AS updatedAt
FROM "property"
    LEFT JOIN "user" ON "user".id = "property".user_id
    LEFT JOIN "properties_has_images" ON "properties_has_images".id="property".id
    LEFT JOIN "properties_offers_vacancies" ON "properties_offers_vacancies".id="property".id
ORDER BY "property".created_at DESC;

CREATE VIEW "bookings" AS
SELECT DISTINCT
    "booking".id,
    "booking".user_id AS bookerId,
    "user".username AS bookerName,
    "user".email AS bookerEmail,
    "booking".vacancy_id,
    "booking".created_at,
    "booking".updated_at,
    "vacancy".start_date AS startDate,
    "vacancy".end_date AS endDate,
    "properties_has_images".images AS images,
    "property".id AS propertyId,
    "property".name AS propertyName,
    "property".slug AS propertySlug,
    "property".description AS propertyDescription,
    "property".capacity AS propertyCapacity,
    "property".bedrooms_count AS propertyBedroomsCount,
    "property".beds_count AS propertyBedsCount,
    "property".bathrooms_count AS propertyBathroomCount,
    "property".type AS propertyType,
    "property".street_number AS propertyStreetNumber,
    "property".street_name AS propertyStreetName,
    "property".zip_code AS propertyZipCode,
    "property".city AS propertyCity,
    "property".country AS propertyCountry,
    "property".latitude AS propertyLatitude,
    "property".longitude AS propertyLongitude,
    "property".user_id AS host_id,
    "properties".host AS propertyHost,
    "properties".hostEmail AS porpertyHostEmail
FROM "booking"
    LEFT JOIN "user" ON "user".id = "booking".user_id
    LEFT JOIN "vacancy" ON "vacancy".id = "booking".vacancy_id
    LEFT JOIN "property" ON "property".id="vacancy".property_id
    LEFT JOIN "properties" ON "properties".id="vacancy".property_id
    LEFT JOIN "properties_has_images" on "properties_has_images".id="vacancy".property_id
ORDER BY "booking".created_at DESC;

COMMIT;