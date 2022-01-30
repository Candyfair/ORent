-- Deploy orent:propertiesFunctions to pg

BEGIN;

CREATE FUNCTION add_property(json) RETURNS property AS $$
	INSERT INTO property (name, description, capacity, bedrooms_count, beds_count, bathrooms_count, type, street_number, street_name, zip_code, city, country, week_price, latitude, longitude, user_id)
	VALUES (
		$1->>'name', 
		$1->>'description', 
        ($1->>'capacity')::int,
        ($1->>'bedrooms_count')::int,
        ($1->>'beds_count')::int,
        ($1->>'bathrooms_count')::int,
		$1->>'type', 
        $1->>'street_number', 
        $1->>'street_name', 
        ($1->>'zip_code')::int,
        $1->>'city', 
        $1->>'country', 
        ($1->>'week_price')::int,
		($1->>'latitude')::real, 
		($1->>'longitude')::real,
        ($1->>'user_id')::int
	)
	RETURNING *;
$$ LANGUAGE SQL STRICT;



CREATE FUNCTION update_property(json) RETURNS property AS $$
	UPDATE property SET
		name=$1->>'name',
		description=$1->>'description',
        capacity=($1->>'capacity')::int,
        bedrooms_count=($1->>'bedrooms_count')::int,
        beds_count=($1->>'beds_count')::int,
        bathrooms_count=($1->>'bathrooms_count')::int,
		type=$1->>'type',
        street_number=$1->>'street_number',
        street_name=$1->>'street_name',
		zip_code=($1->>'zip_code')::int,
        city=$1->>'city',
        country=$1->>'country',
		latitude=($1->>'latitude')::real,
		longitude=($1->>'longitude')::real,
        week_price=($1->>'week_price')::real
	WHERE id=($1->>'id')::int
	RETURNING *;
$$ LANGUAGE SQL STRICT;


CREATE FUNCTION add_property_image(json) RETURNS property_image AS $$
	INSERT INTO property_image (url, name, property_id)
	VALUES (
		$1->>'url', 
		$1->>'name', 
        ($1->>'property_id')::int
	)
	RETURNING *;
$$ LANGUAGE SQL STRICT;

CREATE FUNCTION update_property_image(json) RETURNS property_image AS $$
	UPDATE property_image SET
		url=$1->>'url',
		name=$1->>'name',
        property_id=($1->>'property_id')::int
	WHERE id=($1->>'id')::int
	RETURNING *;
$$ LANGUAGE SQL STRICT;

COMMIT;