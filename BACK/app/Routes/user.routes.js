const {Router} = require('express');
const router = Router();

const checkJWT = require('../middlewares/checkJWT')

const userController = require('../controllers/userController');


router.get('/users', checkJWT, userController.findAll);

router.get('/users/me', checkJWT, userController.findMe);

router.patch('/users/me', checkJWT, userController.save);

router.delete('/users/me', checkJWT, userController.delete);



module.exports = router;