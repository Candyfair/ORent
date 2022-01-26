-- Deploy orent:propertiesFunctions to pg

BEGIN;

CREATE FUNCTION add_property(json) RETURNS property AS $$
	INSERT INTO property (name, description, capacity, bedrooms_count, beds_count, bathrooms_count, type, street_number, street_name, zip_code, city, country, latitude, longitude, user_id)
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
		longitude=($1->>'longitude')::real
	WHERE id=($1->>'id')::int
	RETURNING *;
$$ LANGUAGE SQL STRICT;

COMMIT;