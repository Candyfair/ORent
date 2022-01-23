const {Router} = require('express');

const router = Router();

const checkRefreshJWT = require('./middlewares/checkRefreshJWT');
const checkJWT = require('./middlewares/checkJWT')

const authController = require('./controllers/authController');

router.get('/', (req, res) => {
    res.send(`Bienvenue sur l'API Orent`);
})


// ROUTES AUTH

router.post('/login', authController.login);

router.post('/register', authController.register);

router.post('/refresh-token', checkRefreshJWT, authController.refreshToken)


module.exports = router;