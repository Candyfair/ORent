const Property = require('../models/Property');
const { slugify } = require('../utils/utils');

module.exports = {

    findAll: async (_, response) => {
        try {
            const games = await Property.findAll();
            response.json(games);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    findOne: async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            const game = await Property.findOne(id);
            if (!game)
                return response.status(404).json(`No property found with id ${id}`);
            response.json(game);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    save: async (request, response) => {
        try {
            request.body.user_id = request.userId
            request.body.slug = slugify(request.body.name)
            const instance = new Property(request.body);
            console.log(`instance d'ajout de propriété : `, instance)
            const property = await instance.save();
            if (property) {
                //on a fait un insert
                return response.status(201).json(property);
            }
            //sinon, on a fait un update
            response.status(204).json('Enregistrmeent mis à jour');
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    delete: async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            await new Property({id}).delete();
            response.status(204).json('Enregistrement supprimé');
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    }

}