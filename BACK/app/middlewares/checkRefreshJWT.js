const jwt = require('../services/jwt');

module.exports = (request, response, next) => {
    try {

        const autHeader = request.headers['authorization'];

        let verifRefreshToken = autHeader && autHeader.split(' ')[1];

        if (!verifRefreshToken) return response.sendStatus(401);

        const payload = jwt.validateRefreshToken(verifRefreshToken);   
        
        request.userId = payload.userId;

        next();
    } catch (error) {
        response.status(401).json(error);
    }
}