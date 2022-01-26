const {Router} = require('express');
const router = Router();

const authController = require('../controllers/authController');
const checkRefreshJWT = require('../middlewares/checkRefreshJWT');

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
 
 /**
  * POST /refresh-token
  * @summary Find the user according to his refresh token in database if valid
  * @tags Auth
  * @required RefreshToken in authorization header
  * @returns {User} 200 - Users retrieved (view)
  * @returns {string} 200 - Users retrieved (view)
  * @return {string} 401 - An unauthorized error message because the user email/password combo doesn't exist
  */
 router.post('/refresh-token', checkRefreshJWT, authController.refreshToken)

 module.exports = router;