const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('order');
});

module.exports = router;