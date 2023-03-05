const router = require('express').Router();
const { Customers, Products } = require('../models');


router.get('/', async (req, res) => {

    res.render('dashboard', {
        logged_in: req.session.logged_in,
        firstname: req.session.firstname,
        lastname: req.session.lastname,
        Admin: req.session.Admin,
        isPremiumMember: req.session.isPremiumMember
        });
});


module.exports = router;