const {Router} = require('express');

const router = Router();

const checkRefreshJWT = require('./middlewares/checkRefreshJWT');
const checkJWT = require('./middlewares/checkJWT')

const authController = require('./controllers/authController');


/**
 * GET /
 * @summary Welcome Route
 * @tags Test
 * @returns {string} 200 - `Bienvenue sur l'API Orent`
 */
router.get('/', (req, res) => {
    res.send(`Bienvenue sur l'API Orent`);
})


// ROUTES AUTH

/**
* @typedef UserPost
* @property {string} username
* @property {string} firstname
* @property {string} lastname
* @property {string} email
* @property {string} password
*/

/**
* @typedef UserLogin
* @property {string} email
* @property {string} password
*/

/**
 * POST /register
 * @summary Adds a new user in database
 * @tags Auth
 * @param {UserPost} request.body.required User object to add in database
 * @returns {User} 201 - The newly created Users (view)
 * @return {string} 409 - An error message because the user already exists
 */
router.post('/register', authController.register);

/**
 * POST /login
 * @summary Find the user according to username/password combo in database
 * @tags Auth
 * @param {UserLogin} request.body.required User email/password combo to access user infos
 * @returns {User} 200 - Users retrieved (view)
 * @return {string} 401 - An unauthorized error message because the user email/password combo doesn't exist
 */
router.post('/login', authController.login);

router.post('/refresh-token', checkRefreshJWT, authController.refreshToken)


module.exports = router;