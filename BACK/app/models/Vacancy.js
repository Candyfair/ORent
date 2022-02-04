const db = require('../../configs/database');

class Vacancy {

    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {
            const {rows} = await db.query('SELECT * FROM vacancy');
            return rows.map(row => new Vacancy(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    static async findAllFromProperty(propertyId) {
        try {
            const {rows} = await db.query('SELECT * FROM vacancy WHERE property_id=$1', [propertyId]);
            return rows.map(row => new Vacancy(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    static async findOne(id) {
        try {
            const {rows} = await db.query('SELECT * FROM vacancy WHERE id=$1', [id]);
            if (rows[0]) {
                return new Vacancy(rows[0]);
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
            const { id, startDate, endDate, propertyId } = this
            if (this.id) {
                await db.query(`UPDATE "vacancy" SET start_date=$1, end_date=$2, property_id=$3 WHERE id=$4`, [startDate, endDate, propertyId, id]);
            } else {
                const {rows} = await db.query('INSERT INTO "vacancy" (start_date, end_date, property_id) VALUES ($1, $2, $3) RETURNING *', [startDate, endDate, propertyId]);
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


    async delete() {
        try {
            await db.query('DELETE FROM booking WHERE id=$1', [this.id]);
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }
}

module.exports = Vacancy;