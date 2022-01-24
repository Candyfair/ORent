BEGIN;

CREATE DOMAIN posint AS INT CHECK(value > 0);

CREATE TABLE "user"(
	"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"username" TEXT NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	"avatar" TEXT,
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	"updated_at" TIMESTAMPTZ
);

CREATE TABLE "property"(
	"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"name" TEXT NOT NULL UNIQUE,
    "description" TEXT NOT NULL,
    "capacity" posint NOT NULL,
	"bedrooms_count" posint NOT NULL,
    "beds_count" posint NOT NULL,
    "bathrooms_count" posint NOT NULL,
	"type" TEXT NOT NULL,
    "street_number" TEXT NOT NULL,
    "street_name" TEXT NOT NULL,
    "zip_code" posint NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
	"latitude" INT,
    "longitude" INT,
    "user_id" INTEGER NOT NULL REFERENCES "user"(id),
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	"updated_at" TIMESTAMPTZ
);

CREATE TABLE "vacancy"(
	"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "property_id" INTEGER NOT NULL REFERENCES "property"(id),
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	"updated_at" TIMESTAMPTZ
);

CREATE TABLE "property_image"(
	"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"url" TEXT NOT NULL UNIQUE,
    "name" TEXT,
    "property_id" INTEGER NOT NULL REFERENCES "property"(id),
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	"updated_at" TIMESTAMPTZ
);

CREATE TABLE "booking"(
	"id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INTEGER NOT NULL REFERENCES "user"(id),
    "vacancy_id" INTEGER NOT NULL REFERENCES "vacancy"(id),
	"created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	"updated_at" TIMESTAMPTZ
);


COMMIT;