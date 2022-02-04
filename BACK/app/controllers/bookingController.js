const Booking = require('../models/Booking');

module.exports = {

    findAll: async (_, response) => {
        try {
            const bookings = await Booking.findAll();
            response.json(bookings);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },

    
    findMines: async (request, response) => {
        try {
            const id = request.userId
            const bookings = await Booking.findMines(id);
            response.json(bookings);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },

    findOne: async (request, response) => {
        try {
            const id = parseInt(request.params.id, 10);
            const booking = await Booking.findOne(id);
            if (!booking)
                return response.status(404).json(`No booking found with id ${id}`);
            response.json(booking);
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    },

    save: async (request, response) => {
        try {
            request.body.user_id = request.userId
            const instance = new Booking(request.body);
            console.log(`instance d'ajout de booking : `, instance)
            const booking = await instance.save();
            if (booking) {
                //on a fait un insert
                return response.status(201).json(booking);
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
            await new Booking({id}).delete();
            response.status(204).json('Enregistrement supprimé');
        } catch (error) {
            console.log(error);
            response.status(500).json(error.message);
        }
    }

}