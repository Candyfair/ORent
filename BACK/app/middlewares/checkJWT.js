const jwt = require('../services/jwt');

module.exports = (request, response, next) => {

    try {
        const accessToken = request.headers['authorization'];

        console.log(`accessToken dans le CHECKJWT : `, accessToken)
        let verifAccessToken = accessToken && accessToken.split(' ')[1];

        console.log(`Verif Access Token : `,verifAccessToken)
        if (!verifAccessToken) {
            console.log(`j'ai pas d'access token`)
            return response.sendStatus(401);
        };
        
        const payload = jwt.validateToken(verifAccessToken);

        if (!payload) {
            console.log('pas de payload')
            return response.sendStatus(401);
        };

        request.userId = payload.userId;

        next();

    } catch (error) {
        response.status(401).json(error.message);
    }
}
