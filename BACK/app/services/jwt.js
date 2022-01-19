const JWT = require('jsonwebtoken');

module.exports = {
    // access token
    makeToken: (userId) => {
        try {
            return JWT.sign(
                {
                    userId
                },
                process.env.JWT_SECRET,
                {
                    algorithm: 'HS256',
                    expiresIn: '5m'
                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    //vérification access token
    validateToken: (token) => {
        try {
            return JWT.verify(
                token,
                process.env.JWT_SECRET,
                {
                    algorithms: ['HS256']
                }
            );
        } catch (error) {
            console.log(error);
            throw new Error('Token not valid');
        }
    },
    refreshToken: (userId) => {
        console.log('je suis dans le validate du refresh')
        try {
            return JWT.sign(
                {
                    userId
                },
                process.env.JWT_REFRESHTOKEN,
                {
                    algorithm: 'HS256',
                    expiresIn: '7d'
                }
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    //vérification access token
    validateRefreshToken: (refreshToken) => {
        try {
            
            return JWT.verify(
                refreshToken,
                process.env.JWT_REFRESHTOKEN,
                {
                    algorithms: ['HS256']
                }
            );
        } catch (error) {
            console.log('Validation Refresh Token error', error);
            throw error;
        }
    },
}