const {Router} = require('express');
const router = Router();

const checkJWT = require('../middlewares/checkJWT')

const bookingController = require('../controllers/bookingController');



router.get('/bookings', bookingController.findAll);

router.get('/bookings/:id(\\d+)', checkJWT, bookingController.findOne);

router.get('/bookings/me', checkJWT, bookingController.findMines);


router.post('/bookings', checkJWT, bookingController.save);

router.patch('/bookings', checkJWT, bookingController.save);

router.delete('/bookings/:id(\\d+)', checkJWT, bookingController.delete);



module.exports = router;