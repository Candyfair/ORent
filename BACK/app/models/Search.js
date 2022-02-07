const db = require('../../configs/database');

class Search {

    constructor(obj={}) {
        for (const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findAll(destination, capacity) {
        try {
            const {rows} = await db.query('SELECT * FROM properties WHERE country=$1 AND capacity >= $2::int', [destination, capacity]);
            return rows.map(row => new Search(row));
        } catch (error) {
            if (error.detail) {
                throw new Error(error.detail);
            }
            throw error;
        }
    }
}

module.exports = Search;