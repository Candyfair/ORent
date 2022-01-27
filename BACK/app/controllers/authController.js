const User = require('../models/User')
const jwt = require('../services/jwt');

module.exports = {
    
    login: async (request, response) => {
        try{

            const {email, password} = request.body;
            const login = true;
            
            const user = await new User({email, password, login}).findOne();
            

            if(user.auth === true) {
                console.log('user id', user.user.id)
                const accessToken = jwt.makeToken(user.user.id)
                const refreshToken = jwt.refreshToken(user.user.id)
                console.log('user true : ', user)
                console.log('user token : ', accessToken)

                return response.json({auth: true, accessToken, refreshToken, user: user.user})
            }

            if(user.auth === false) {
                console.log('user false : ', user)
                return response.json(user)
            }


        } catch (error) {
            console.log(error)
        }
    },

    register: async (request, response) => {
        try{
            const {username, firstname, lastname, email, password} = request.body;

            const user = await new User().save({username, firstname, lastname, email, password});

            const accessToken = jwt.makeToken(user.id)

            const refreshToken = jwt.refreshToken(user.id)

            response.send({accessToken, refreshToken, user: user})

        } catch(error) {
            console.log(error)
        }
    }, 

    refreshToken: async (request, response) => {
        try {
            const userId = request.userId;

            const user = await new User({id: userId}).findOne();
    
            const accessToken = jwt.makeToken(userId);
            const refreshToken = jwt.refreshToken(userId);
    
            response.send({accessToken, refreshToken, user});

        } catch(error) {
            console.log('error refresht token', error)
        }

    }
}
