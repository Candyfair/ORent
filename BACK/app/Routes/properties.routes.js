const {Router} = require('express');
const router = Router();

const checkJWT = require('../middlewares/checkJWT')

const propertyController = require('../controllers/propertyController');

/**
 * GET /properties
 * @summary  Respond with all boardgames in database
 * @tags Properties
 * @returns {array<Boardgame>} 200 - An array of boardgames
 * @returns {string} 500 - An error message
 */
 router.get('/properties', propertyController.findAll);

/**
 * GET /properties/{id}
 * @summary Respond with one properties (view) from database
 * @tags Properties
 * @param {number} id.path.required The id of the property to fetch
 * @returns {Properties} 200 - A single Properties (view) identified by its id
 * @returns {string} 404 - A not found error message
 * @returns {string} 500 - An error message
 */
 router.get('/properties/:id(\\d+)', propertyController.findOne);

/**
* @typedef PropertyPost
* @property {string} name
* @property {string} author
* @property {string} editor
* @property {number} min_players
* @property {number} max_players
* @property {number} min_age
*/

/**
 * POST /properties
 * @summary Adds a new property in database
 * @tags Properties
 * @param {PropertyPost} request.body.required Property object to add in database
 * @returns {Properties} 201 - The newly created Properties (view)
 * @returns {string} 500 - An error message
 */
 router.post('/properties', propertyController.save);

/**
 * PATCH /properties
 * @summary Updates an existing property in database
 * @tags Properties
 * @param {Property} request.body.required Property object to update in database
 * @returns {string} 204 - A confirmation message
 * @returns {string} 500 - An error message
 */
 router.patch('/properties', propertyController.save);

/**
 * DELETE /properties/{id}
 * @summary Delete one property in database
 * @tags Properties
 * @param {number} id.path.required The id of the boardgame to fetch
 * @returns {string} 204 - A confirmation message
 * @returns {string} 500 - An error message
 */
router.delete('/boardgames/:id(\\d+)', propertyController.delete);



module.exports = router;