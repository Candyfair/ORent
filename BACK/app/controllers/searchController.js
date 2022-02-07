const Search = require('../models/Search');
const { slugify } = require('../utils/utils');

module.exports = {

    findAll: async (request, response) => {
        try {
            const { destination } = request.body
            const capacity = parseInt(request.body.capacity, 10)
            console.log(`j'en la destation ${destination} et la capacité ${capacity} dans ma recherche`)
            const properties = await Search.findAll(destination, capacity);
            response.json(properties);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
}