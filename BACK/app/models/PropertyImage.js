const db = require('../../configs/database');

class PropertyImage {

    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }


     static async findAll() {
        try {
            const {rows} = await db.query('SELECT * FROM property_image');
            return rows.map(row => new PropertyImage(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }


     static async findOne(id) {
        try {
            const {rows} = await db.query('SELECT * FROM property_image WHERE property_id=$1', [id]);
            if (rows[0]) {
                return new PropertyImage(rows[0]);
            }
            return null;

        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    async save() {
        try {
            if (this.id) {
                //update
                await db.query('SELECT * FROM update_property_image($1)', [this]);
            } else {
                const {rows} = await db.query('SELECT * FROM add_property_image($1)', [this])
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
            await db.query('DELETE FROM property_image WHERE id=$1', [this.id]);
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }
}

module.exports = PropertyImage;