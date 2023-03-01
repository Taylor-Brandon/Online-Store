const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('done');
});

module.exports = router;