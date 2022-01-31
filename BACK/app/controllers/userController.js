const User = require('../models/User');

module.exports = {

    findAll: async (_, response) => {
        try {
            const user = await User.findAll();
            response.json(user);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },

    findMe: async (request, response) => {
        try {
            const id = request.userId
            const user = await User.findOne(id);
            if (!user)
                return response.status(404).json(`No user found with id ${id}`);
            response.json(user);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },

    save: async (request, response) => {
        try {
            request.body.id = request.userId
            const instance = new User(request.body);
            const user = await instance.save();
            if (user) {
                if (user.auth === false) {
                    return response.status(401).json(user)
                }
                return response.status(201).json(user);
            }
            //sinon, on a fait un update
            response.status(204).json('User mis à jour');
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },
    delete: async (request, response) => {
        try {
            const id = request.userId;
            await new User({id}).delete();
            response.status(204).json('User supprimé');
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    }

}