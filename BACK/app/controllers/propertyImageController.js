const PropertyImage = require('../models/PropertyImage');

module.exports = {

    findAll: async (_, response) => {
        try {
            const propertiesImages = await PropertyImage.findAll();
            response.json(propertiesImages);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    findOne: async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            const propertyImage = await PropertyImage.findOne(id);
            if (!propertyImage)
                return response.status(404).json(`No PropertyImage found with id ${id}`);
            response.json(propertyImage);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    save: async (request, response) => {
        try {
            console.log('request.body :', request.body)
            const instance = new PropertyImage(request.body);
            const propertyImage = await instance.save();
            if (propertyImage) {
                //on a fait un insert
                return response.status(201).json(propertyImage);
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
            await new PropertyImage({id}).delete();
            response.status(204).json('Enregistrement supprimé');
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    }

}