const router = require('express').Router();

router.get('/', async (req, res) => {

    res.render('contact');
});

module.exports = router;