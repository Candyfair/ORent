const db = require('../../configs/database');

/**
* @typedef {Object} Properties
* @property {number} id
* @property {string} name
* @property {string} description
* @property {number} capacity
* @property {number} bedroomsCount
* @property {number} bedsCount
* @property {number} bathroomsCount
* @property {string} type
* @property {string} streetNumber
* @property {string} streetName
* @property {string} zipCode
* @property {string} city
* @property {string} country
* @property {number} latitude
* @property {number} longitude
* @property {string} host
* @property {array<string>} images
* @property {array<string>} vacancies
* @property {string} createdAt
* @property {string} updatedAt
*/

class Property {

    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    /**
     * Retrieves all properties from database
     * @static
     * @async
     * @returns {Array<Properties>} all properties in database
     * @throws {Error} An error
     */
     static async findAll() {
        try {
            const {rows} = await db.query('SELECT * FROM properties');
            return rows.map(row => new Property(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    /**
     * Retrieves one property from database
     * @static
     * @async
     * @param {number} id 
     * @returns {Properties | null} the instance identified with its id, null if no record was found
     * @throws {Error} An error
     */
     static async findOne(id) {
        try {
            const {rows} = await db.query('SELECT * FROM properties WHERE id=$1', [id]);
            if (rows[0]) {
                return new Property(rows[0]);
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
     * Adds or updates an instance of Property in database
     * @async
     * @returns {Properties | undefined} the inserted instance or undefined when uptading one
     * @throws {Error} An error
     */
     async save() {
        try {
            if (this.id) {
                //update
                await db.query('SELECT * FROM update_property($1)', [this]);
            } else {
                const {rows} = await db.query('SELECT * FROM add_property($1)', [this])
                this.id = rows[0].id;
                return this;
            }
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    /**
     * Removes a Property from database
     */
    async delete() {
        try {
            await db.query('DELETE FROM property WHERE id=$1', [this.id]);
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }
}

module.exports = Property;