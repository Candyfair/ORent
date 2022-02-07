const Property = require('../models/Property');
const { slugify } = require('../utils/utils');

module.exports = {

    findAll: async (request, response) => {
        try {
            const { destination, capacity } = request.body
            const properties = await Property.findAll(destination, capacity);
            response.json(properties);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
}