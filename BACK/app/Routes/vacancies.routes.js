const {Router} = require('express');
const router = Router();

const checkJWT = require('../middlewares/checkJWT')

const vacancyController = require('../controllers/vacancyController');



router.get('/vacancies', vacancyController.findAll);

router.get('/vacancies/:id(\\d+)', checkJWT, vacancyController.findOne);

router.get('/vacancies/property/:propertyId(\\d+)',vacancyController.findAllFromProperty)

router.post('/vacancies', checkJWT, vacancyController.save);

router.patch('/vacancies', checkJWT, vacancyController.save);

router.delete('/vacancies/:id(\\d+)', checkJWT, vacancyController.delete);



module.exports = router;