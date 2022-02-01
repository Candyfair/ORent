const db = require('../../configs/database');
const bcrypt = require('bcrypt');
const {userSchema} = require('../schemas/userSchema');
const { response } = require('express');

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
    async login() {
		try { 
            const {rows} = await db.query(`SELECT * FROM "user" WHERE email=$1`, [this.email]);

            console.log('Rows[0]',rows[0])

            if(!rows[0]) {
                console.log('Aucun utilisateur trouvé avec cette adresse email');
                const infos = {
                    auth: false, type: 'email', message: `Aucun compte existant avec cette adresse email`
                }
                return infos
            }

            const isValid = await bcrypt.compare(this.password, rows[0].password);

            console.log(`is Valid ? `, isValid)
            if(!isValid) {
                console.log('Le password ne match pas');
                const infos = {
                    auth: false, type: 'password', message: 'Le mot de passe est incorrect'
                }
                return response.status(401).json(infos)
            }

            if(rows[0].id) {
                const user = await db.query(`SELECT * FROM "users" WHERE id=$1`, [rows[0].id])
                
                const infos = {
                    auth: true, user: user.rows[0], message: 'Connexion réussie'
                }
                console.log(`Infos reçues après avoir valider le password`, infos)
                return infos
            }
        } catch(error) {
            if(error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    };

    static async findAll() {
        try {
            const {rows} = await db.query('SELECT * FROM "users"');
            return rows.map(row => new User(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    static async findOne(id) {
        try {
            const {rows} = await db.query('SELECT * FROM "users" WHERE id=$1', [id]);
            if (rows[0]) {
                return new User(rows[0]);
            }
            return null;

        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

   
    /**
     * Adds or updates an instance of User in database
     * @async
     * @returns {Users | undefined} the inserted instance or undefined when uptading one
     * @throws {Error} An error
     */
    async save(userInfos) {
        try {
            if (this.id) {
                const { id, username, firstname, lastname, email, password, newPassword } = this
                const {rows} = await db.query(`SELECT * FROM "user" WHERE id=$1`, [id]);
                const isValid = await bcrypt.compare(password, rows[0].password);
                if(!isValid) {
                    console.log('Le password ne match pas');
                    const infos = {
                        auth: false, type: 'password', message: `le password est incorrect`
                    }
                    return infos
                }

                if (newPassword) {
                    let saltRounds = await bcrypt.genSalt(10);
                    let newHashedPassword = await bcrypt.hash(newPassword, saltRounds);
                    const updatedUserWithPassword = await db.query(`UPDATE "user" SET username=$1, firstname=$2, lastname=$3, email=$4, password=$5 WHERE id=$6 RETURNING *;`, [username, firstname, lastname, email, newHashedPassword, id]);
                    return updatedUserWithPassword.rows[0];
                }
                const updatedUser = await db.query(`UPDATE "user" SET username=$1, firstname=$2, lastname=$3, email=$4 WHERE id=$5 RETURNING *;`, [username, firstname, lastname, email, id]);
                return updatedUser.rows[0];
            } else {
                const {username, firstname, lastname, email, password} = userInfos

                const infosValidation = await userSchema.validate(userInfos);
    
                if (infosValidation.error) {
                    const infosValidationError = infosValidation.error.message ;
                    throw new Error(infosValidationError);     
                }
                
                let saltRounds = await bcrypt.genSalt(10);
                let hashedPassword = await bcrypt.hash(password, saltRounds);
        
                const {rows} = await db.query('INSERT INTO "user" (username, firstname, lastname, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', [username, firstname, lastname, email, hashedPassword]);
                
                if(rows[0]) {
                    const user = await db.query('SELECT * FROM "users" WHERE id=$1', [rows[0].id]);
                    if(user.rows[0]) return new User(user.rows[0]);
                }
            }
        } catch(error) {
            console.log('Erreur dans le schéma User : ', error)
            throw new Error(error);
        }
    };

    async delete() {
        try {
            await db.query('DELETE FROM "user" WHERE id=$1', [this.id]);
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }
}

module.exports = User;