const Vacancy = require('../models/Vacancy');

module.exports = {

    findAll: async (_, response) => {
        try {
            const vacancies = await Vacancy.findAll();
            response.json(vacancies);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },

    findAllFromProperty: async (request, response) => {
        try {   
            
            const vacancies = await Vacancy.findAllFromProperty(request.params.propertyId);
            response.json(vacancies);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },

    
    findOne: async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            const vacancy = await Vacancy.findOne(id);
            if (!vacancy)
                return response.status(404).json(`No vacancy found with id ${id}`);
            response.json(vacancy);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },

    save: async (request, response) => {
        try {
            const instance = new Vacancy(request.body);
            console.log(`instance d'ajout de vacancy : `, instance)
            const vacancy = await instance.save();
            if (vacancy) {
                //on a fait un insert
                return response.status(201).json(vacancy);
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
            await new Vacancy({id}).delete();
            response.status(204).json('Enregistrement supprimé');
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    }

}