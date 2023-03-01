const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('product-details');
});

module.exports = router;