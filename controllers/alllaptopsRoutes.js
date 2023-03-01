const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('alllaptops');
});

module.exports = router;