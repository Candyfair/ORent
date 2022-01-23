const {Router} = require('express');

const router = Router();


router.get('/', (req, res) => {
    res.send(`Hello World, je suis sur l'API Orent`);
})


module.exports = router;