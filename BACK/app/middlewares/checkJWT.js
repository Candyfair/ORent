const jwt = require('../services/jwt');

module.exports = (request, response, next) => {

    try {
        const accessToken = request.headers['authorization'];

        let verifAccessToken = accessToken && accessToken.split(' ')[1];

        if (!verifAccessToken) {
            return response.sendStatus(401);
        };
        
        const payload = jwt.validateToken(verifAccessToken);

        if (!payload) {
            return response.sendStatus(401);
        };

        request.userId = payload.userId;

        next();

    } catch (error) {
        response.status(401).json(error.message);
    }
}
