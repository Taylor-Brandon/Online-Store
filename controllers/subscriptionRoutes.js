const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('subscription');
});

module.exports = router;