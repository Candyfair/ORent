# Projet d'Apo 'O'Rent' - La plateforme de location de logement entre particuliers

This project is a REST API that handle a collection of users and properties

## Stack technique

- [NodeJS](https://nodejs.org/en/download/) (v12 or above)
- [PostgreSQL](https://www.postgresql.org/download/) (v12 or above)
- [Sqitch](https://sqitch.org/download/) (v1 or above)
- [Cors] (https://www.npmjs.com/package/cors) (v2 or above)
- [Joi] (https://www.npmjs.com/package/joi) (v17 or above)
- [Fetch-opengraph] (https://www.npmjs.com/package/fetch-opengraph) (v1 or above)
- [Bcrypt] (https://www.npmjs.com/package/bcrypt) (v5 or above)
- [Jsonwebtoken] (https://www.npmjs.com/package/jsonwebtoken) (v8 or above)
- [Sanitizer] (https://www.npmjs.com/package/sanitizer) (v0.1 or above)
- [Dotenv] (https://www.npmjs.com/package/dotenv) (v10 or above)


These tools need to be installed in order to make the API work.
Install on your localhost before next steps.



## Installation

Clone the repository locally

```bash
git clone <repository_url>
```

Then in the local file, install every NPM dependancies

```bash
npm install
```

Copy the .env.example file and rename it to '.env' and fill it with the needed informations.

Copy the sqitch.conf file and rename it to sqitch.conf and fill it with the needed informations.

Finally create a Postgres databas and deploy it with sqitch.

```bash
createdb devloveper;
sqitch deploy
```

Configure PostrgreSQL (or provide the needed environment variables) so the `createdb` and `sqitch` can be executed properly

## Données de démonstration

Afin de mettre en place quelques données de test, lancer

```bash
psql -d devloveper -f ./data/seeding.sql
```

## Lancement

```bash
npm start
```

joi views fonctions