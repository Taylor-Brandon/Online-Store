const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('ultraportables');
});

module.exports = router;