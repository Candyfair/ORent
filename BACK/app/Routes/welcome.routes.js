const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send(`Bienvenue sur l'API Orent`);
})

module.exports = router;