const db = require('../../configs/database');

class Booking {

    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll() {
        try {
            const {rows} = await db.query('SELECT * FROM bookings');
            return rows.map(row => new Booking(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }

    static async findMines(id) {
        try {
            const {rows} = await db.query('SELECT * FROM bookings WHERE bookerId=$1', [id]);
            return rows.map(row => new Booking(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }


    static async findOne(id) {
        try {
            const {rows} = await db.query('SELECT * FROM bookings WHERE id=$1', [id]);
            if (rows[0]) {
                return new Booking(rows[0]);
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
            const { id, userId, vacancyId } = this
            if (this.id) {
                //update
                await db.query(`UPDATE "booking" SET user_id=$1, vacancy_id=$2 WHERE id=$3`, [userId, vacancyId, id]);
            } else {
                const {rows} = await db.query('INSERT INTO "booking" (user_id, vacancy_id) VALUES ($1, $2) RETURNING *', [userId, vacancyId]);
                this.id = rows[0].id;
                await db.query(`UPDATE "vacancies" SET booked=$1 WHERE id=$2`, [true, vacancyId])
                const result = await db.query('SELECT * FROM bookings WHERE id=$1', [this.id])
                return result.rows[0];
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

module.exports = Booking;