const client = require('../../configs/database');
const bcrypt = require('bcrypt');
const {userSchema} = require('../schemas/userSchema');

/**
* @typedef {Object} Users
* @property {number} id
* @property {string} username
* @property {string} firstname
* @property {string} lastname
* @property {string} email
* @property {string} createdAt
* @property {string} updatedAt
* @property {array<number>} bookings
*/

class User {

    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    } 

    /**
     * Retrieves one User from database
     * @static
     * @async
     * @returns {Users | null} the instance identified with its id, null if no record was found
     * @throws {Error} An error
     */
    async findOne() {
		try {
            if(this.login){
                
                const {rows} = await client.query(`SELECT * FROM "user" WHERE email=$1`, [this.email]);

                console.log('Rows[0]',rows[0])

                if(!rows[0]) {
                    console.log('Aucun utilisateur trouvé avec cette adresse email');
                    const infos = {
                        auth: false, type: 'email', message: `Aucun compte existant avec cette adresse email`
                    }
                    return infos
                }

                const isValid = await bcrypt.compare(this.password, rows[0].password);

                if(!isValid) {
                    console.log('Le password ne match pas');
                    const infos = {
                        auth: false, type: 'password', message: 'Le mot de passe est incorrect'
                    }
                    return infos
                }

                if(rows[0].id) {
                    const user = await client.query(`SELECT * FROM "users" WHERE id=$1`, [rows[0].id])
                    const infos = {
                        auth: true, user: user.rows[0], message: 'Connexion réussie'
                    }
                    return infos
                }

            } else {
                if(this.username) {
                    const {rows} = await client.query(`SELECT * FROM "user" WHERE username=$1`, [this.username]);
                    if(rows[0]) {
                        const user = await client.query('SELECT * FROM "users" WHERE id=$1', [rows[0].id]);
                        if(user.rows[0]) return new User(user.rows[0]);
                    }
                }
    
                if(this.id) {
                    const {rows} = await client.query(`SELECT * FROM "user" WHERE id=$1`, [this.id]);
                    if(rows[0]) {
                        const user = await client.query('SELECT * FROM "users" WHERE id=$1', [rows[0].id]);
                        if(user.rows[0]) return new User(user.rows[0]);
                    }
                }
    
                if(this.email) {
                    const {rows} = await client.query(`SELECT * FROM "user" WHERE email=$1`, [this.email]);
                    if(rows[0]) {
                        const user = await client.query('SELECT * FROM "users" WHERE id=$1', [rows[0].id]);
                        if(user.rows[0]) return new User(user.rows[0]);
                    }
                }
            }




        } catch(error) {
            if(error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    };
    
    /**
     * Adds or updates an instance of User in database
     * @async
     * @returns {Users | undefined} the inserted instance or undefined when uptading one
     * @throws {Error} An error
     */
    async save(userInfos) {
        try {
            const {username, firstname, lastname, email, password} = userInfos

            const infosValidation = await userSchema.validate(userInfos);

            if (infosValidation.error) {
                const infosValidationError = infosValidation.error.message ;
                throw new Error(infosValidationError);     
            }
            
            let saltRounds = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(password, saltRounds);
    
            const {rows} = await client.query('INSERT INTO "user" (username, firstname, lastname, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', [username, firstname, lastname, email, hashedPassword]);
            
            if(rows[0]) {
                const user = await client.query('SELECT * FROM "users" WHERE id=$1', [rows[0].id]);
                if(user.rows[0]) return new User(user.rows[0]);
            }

        } catch(error) {
            console.log('Erreur dans le schéma User : ', error)
            throw new Error(error);
        }

    };
}

module.exports = User;